# useNextQueryState

A custom React hook designed to synchronize component state with the URL's query parameters. This allows you to easily reflect a component's state in the URL or initialize a component's state from the URL.

This is especially useful for enhancing user experience by maintaining the state when sharing URLs with others, or after refreshing the page.

## Installation

```bash
npm install use-next-query-state --save
```

Or with yarn:

```bash
yarn add use-next-query-state
```

## Compatibility

This hook leverages `next/navigation` and is primarily intended for use within the [Next.js](https://nextjs.org/) framework from version 13.

## Usage

1. Import the hook in your component:

```jsx
import useNextQueryState from "use-next-query-state";
```

2. Use the hook in your component:

```tsx
import useNextQueryState from "use-next-query-state";

function MyComponent() {
  const defaultParams = {
    search: "",
    page: "1",
  };

  const [queryState, setQueryState] = useNextQueryState(defaultParams); // Default params will never appear in the query

  return (
    <div>
      <input
        type="text"
        value={queryState.search}
        onChange={(e) =>
          setQueryState({ ...queryState, search: e.target.value })
        }
        placeholder="Search..."
      />
      {/* More components using the queryState */}
    </div>
  );
}
```

## API

### useNextQueryState(defaultQuery: URLQueryParams)

**Parameters:**

- `defaultQuery` (Object): The default query parameters to be used as a fallback and to be omitted from the URL when they match the default values.

**Returns:**

- `queryState` (Object): The current state, which is synchronized with the URL's query parameters.
- `setQueryState` (Function): A function to update the `queryState`. This will also update the URL's query parameters accordingly.

## Note on Behavior

This hook automatically:

- Sets the initial state from the URL's query parameters on mount.
- Updates the URL's query parameters to reflect the state. It avoids adding default parameters to the URL to keep it clean.

## License

[MIT License](./LICENSE)
