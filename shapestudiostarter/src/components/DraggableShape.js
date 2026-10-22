import { useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import ShapeView from './ShapeView';
import { SHAPES } from '../constants/theme';

const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));

// A shape placed on the canvas that can be dragged around.
// When the user lets go, onMove(id, x, y) reports the new position.
export default function DraggableShape({ shape, bounds, onMove }) {
  const { width, height } = SHAPES[shape.type];
  const pan = useRef(new Animated.ValueXY({ x: shape.x, y: shape.y })).current;
  const lastPosition = useRef({ x: shape.x, y: shape.y });

  // The responder is created once, so keep the latest props in refs.
  const boundsRef = useRef(bounds);
  const onMoveRef = useRef(onMove);
  boundsRef.current = bounds;
  onMoveRef.current = onMove;

  const nextPosition = (gesture) => ({
    x: clamp(lastPosition.current.x + gesture.dx, 0, boundsRef.current.width - width),
    y: clamp(lastPosition.current.y + gesture.dy, 0, boundsRef.current.height - height),
  });

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => pan.setValue(nextPosition(gesture)),
      onPanResponderRelease: (_, gesture) => {
        lastPosition.current = nextPosition(gesture);
        onMoveRef.current(shape.id, lastPosition.current.x, lastPosition.current.y);
      },
    })
  ).current;

  return (
    <Animated.View
      {...responder.panHandlers}
      style={[styles.shape, { transform: pan.getTranslateTransform() }]}
    >
      <ShapeView type={shape.type} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shape: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
