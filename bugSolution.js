```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a callback function to update the state.
    // This prevents the effect from rerunning immediately after the update
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1000ms
    return () => clearInterval(intervalId); // cleanup on unmount
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```