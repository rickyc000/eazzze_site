<img src='./public/favicon.ico' width="70px">

# Artist Website: eazzze

## Project Brief
To produce a visually interesting artist website presenting mixes via embedded Soundcloud content with corresponding mix tracklists.

## Technologies Used

* React.js
## Deployed Version
https://eazzze.net/

## Development

The tracklist modal is presented by defining a `toggleTracklistView` as a function in the Mix parent component:

```
const toggleTracklistView = () => {
  setTracklistVisible(!tracklistVisible)
}
```

This is then passed as a prop to Tracklist child component, allowing the tracklist view to be closed from within the Tracklist component:

```
<div className='close-tracklist-wrapper'>
  <img
    className='close-tracklist'
    onClick={toggleTracklistView}
    src={close}
    alt="close-tracklist"
    width="18px" />
</div>
```

The moving background effect was created using the `repeating-linear-gradient` CSS function on the background property:

```
main {
  background: repeating-linear-gradient(0deg,
      $text-color 2px,
      $base-color 5px,
      #000000 4px,
      rgb(0, 0, 0) 6px,
      rgb(91, 91, 91) 8px,
      $base-color 2px);
  background-size: 200% 200%;
  animation: background-move 200s ease-in-out infinite;
}

@keyframes background-move {
  100% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 50% 50%;
  }
}
```



