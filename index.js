import { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';

const eventListeners = {};

const addEventListener = (name, id, setData) => {
  const listeners = eventListeners[name] || {};
  return Object
    .assign(
      eventListeners,
      {
        [name]: {
          ...listeners,
          [id]: setData,
        },
      },
    );
};

const removeEventListener = (name, id) => (
  delete eventListeners[name][id]
);

export const useEvent = (
  name,
  withInitialData,
) => {
  const [ id ] = useState(uuidv4());
  const [ data, setData ] = useState(
    withInitialData,
  );
  useEffect(
    () => {
      addEventListener(
        name,
        id,
        setData,
      );
      return () => removeEventListener(
        name,
        id,
      );
    },
    [],
  );
  return data;
};

export const emitEvent = (name, withData) => {
  const listeners = eventListeners[name] || {};
  return Object
    .values(listeners)
    .map(
      setData => setData(
        withData,
      ),
    );
};
