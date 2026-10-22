import { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import ShapeView from './ShapeView';
import { COLORS, SHAPES, SHAPE_TYPES } from '../constants/theme';

// One shape in the tray. Drag it onto the canvas to drop a copy there,
// or just tap it to add a copy in the top-left corner.
function PaletteItem({ type, onDrop, onTap }) {
  const pan = useRef(new Animated.ValueXY()).current;
  const grabOffset = useRef({ x: 0, y: 0 });
  const handlers = useRef({ onDrop, onTap });
  handlers.current = { onDrop, onTap };

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => {
        // Remember where inside the shape the finger is.
        grabOffset.current = { x: event.nativeEvent.locationX, y: event.nativeEvent.locationY };
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gesture) => {
        const isTap = Math.abs(gesture.dx) < 5 && Math.abs(gesture.dy) < 5;
        if (isTap) {
          handlers.current.onTap(type);
        } else {
          // Top-left corner of the shape, in screen coordinates.
          handlers.current.onDrop(
            type,
            gesture.moveX - grabOffset.current.x,
            gesture.moveY - grabOffset.current.y
          );
        }
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return (
    <View style={styles.item}>
      <Animated.View
        {...responder.panHandlers}
        style={{ transform: pan.getTranslateTransform(), zIndex: 10 }}
      >
        <ShapeView type={type} />
      </Animated.View>
      <Text style={styles.label}>{SHAPES[type].label}</Text>
    </View>
  );
}

export default function ShapePalette({ onDrop, onTap }) {
  return (
    <View style={styles.tray}>
      <Text style={styles.title}>Drag a shape onto the canvas</Text>
      <View style={styles.row}>
        {SHAPE_TYPES.map((type) => (
          <PaletteItem key={type} type={type} onDrop={onDrop} onTap={onTap} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tray: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingTop: 14,
    paddingBottom: 18,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.muted,
    textAlign: 'center',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  item: {
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: COLORS.ink,
  },
});
