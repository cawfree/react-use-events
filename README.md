# react-use-events
Simple react hooks for event handling.

## 🚀 Getting Started

Using [`npm`]():

```sh
npm install --save react-use-events
```

Using [`yarn`]():

```sh
yarn add react-use-events
```

## ✍️ Usage

```javascript
import React, { useEffect } from 'react';
import { useEvent, emitEvent } from 'react-use-events';

const eventName = 'SOME_EVENT_NAME';

export default () => {
  // When your component is unmounted, the listener will be cleared.
  const [ data ] = useEvent(
    eventName,
    // Define some initial data.
    'No data received.',
  );
  useEffect(
    () => {
      // You can call this anywhere in your app; all registered
      // components will be updated.
      emitEvent(
        eventName,
        'Received some data.',
      );
    },
    [],
  );
  return (
    <div>
      {data}
    </div>
  );
};
```

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
