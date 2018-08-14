# Zeplin React Native (typescript) Extension

Generates react native snippets for colors, text and layout styles.

## Samples

### Colors output:

```ts
enum Colors {
    red = "#ff0000",
    green = "#00ff00",
    blue = "#0000ff",
    yellow = "#ffff00",
    black = "#000000",
    black50 = "rgba(0, 0, 0, 0.5)",
    white = "#ffffff"
}
```

### Text style output:

```ts
const textStyles = StyleSheet.create({
    sampleTextStyle: {
        fontFamily: "SFProText",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left"
    },
    sampleTextStyleWithColor: {
        fontFamily: "SFProText",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: Colors.red
    }
});
```

### Layout style output:

```ts
const mainContaier: ViewStyle = {
    flex: 1,
    justifyContent: "center"
};

const layerWithShadow: ViewStyle = {
    width: 100,
    height: 100,
    shadowColor: colors.black50,
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
};
```

## Options

### Color format

Supports HEX, RGB or HSL. Sample colors output as HSL:

```ts
enum Colors {
  red = "hsl(0, 100%, 50%)",
  black50 = "hsla(0, 0%, 0%, 0.5)",
};
```

### Dimensions
Toggles generating `width` and `height` properties from layers.

### Default values
Toggles always generating default values from layers or text styles, such as `fontWeight` and `fontStyle`.
