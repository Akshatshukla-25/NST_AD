import { StyleSheet, View } from 'react-native';
import ShapeView from './ShapeView';
import { COLORS } from '../constants/theme';

// A read-only, scaled-down picture of a saved design.
export default function DesignPreview({ design, width }) {
  const scale = width / design.canvas.width;
  const height = design.canvas.height * scale;

  return (
    <View style={[styles.box, { width, height }]}>
      {design.shapes.map((shape) => (
        <ShapeView
          key={shape.id}
          type={shape.type}
          scale={scale}
          style={{ position: 'absolute', left: shape.x * scale, top: shape.y * scale }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
