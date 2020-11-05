## Instant Message Popup Slider

Library depends on jQuery so first be sure that jQuery is included before using plugin.
In order to use this library all what you need to do is to include library / plugin and call function to show slider.

## Configuration properties
- title: Presents text which will be shown on slider
- clickUrl: Presents target URL where user will be redirected after clicking on slider
- imageUrl: Presents URL of image which will be shown in slider
- width: Defines how many pixels image will be animated by width
- height: Defines how many pixels image will be animated by height
- position: Defines start position of slider. Possible values are bottom_left and bottom_right. Default value is bottom_right.
- showOnStart: Defines do you want to show/ animate slider on page load. Default value is 0 which means do not animate slide on page load.

## Usage example

```js
<script type="text/javascript">
   imPopupSlider.show({
      width: 500,
      height: 300,
      title: 'Example title',
      clickUrl: 'https://example.com',
      imageUrl: 'example.jpg'
   });
</script>
```

For more details please look at examples directory.
