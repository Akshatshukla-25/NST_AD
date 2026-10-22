import { View } from 'react-native';
import { SHAPES } from '../constants/theme';

// Draws a single shape. `scale` lets previews draw smaller copies.
export default function ShapeView({ type, scale = 1, style }) {
  const shape = SHAPES[type];

  return (
    <View
      style={[
        {
          width: shape.width * scale,
          height: shape.height * scale,
          borderRadius: shape.radius * scale,
          backgroundColor: shape.color,
        },
        style,
      ]}
    />
  );
}
