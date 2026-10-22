import { Pressable, StyleSheet, Text, View } from 'react-native';
import DesignPreview from './DesignPreview';
import { COLORS } from '../constants/theme';

export const formatDate = (iso) =>
  new Date(iso).toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });

// One row in the Saved list.
export default function DesignCard({ design, onPress }) {
  const count = design.shapes.length;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <DesignPreview design={design} width={64} />
      <View style={styles.info}>
        <Text style={styles.title}>{formatDate(design.createdAt)}</Text>
        <Text style={styles.subtitle}>
          {count} {count === 1 ? 'shape' : 'shapes'}
        </Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 12,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  pressed: {
    opacity: 0.7,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.ink,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.muted,
  },
  chevron: {
    fontSize: 28,
    color: COLORS.muted,
  },
});
