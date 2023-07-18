# React JS Docs (Important Parts)

## Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state.

**When you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.**


## rm

**Header.js**

```javascript
// existing code here

export default function Header({ keyword, handleSetKeyword }) {
  // existing code

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    console.log("userName:", userName);
  }, [isLoggedIn, userName]);

  return (
    // existing code
  );
}
```

output:

```shell
isLoggedIn: false
userName: 
isLoggedIn: false
userName: 
isLoggedIn: true
userName: John
```

**DisplayResults.js**

```javascript
console.log("This is api_keyword:", API_KEYWORD);
```