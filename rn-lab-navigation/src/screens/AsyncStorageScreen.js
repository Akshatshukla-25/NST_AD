import { useState, useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncStorageScreen() {
    const [text, setText] = useState("")

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persisted Text:  {text}</Text>
            <Button
                title='Persist Data'
                onPress={() => {

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, padding: 24 },
    title: { fontSize: 24, fontWeight: '600', textAlign: 'center' },
    description: { textAlign: 'center' },
    result: { marginTop: 8 },
    error: { color: '#b91c1c', textAlign: 'center' },
    success: { color: '#15803d', textAlign: 'center' },
});