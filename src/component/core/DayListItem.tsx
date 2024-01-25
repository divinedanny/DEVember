import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

type DayListItemProps = {
    day: number;
}

function DayListItem({day}: DayListItemProps) {
    return (
        <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#F9EDE3',
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9B4521',
        borderRadius: 20,
    },
    text: {
        color: '#9B4521',
        fontSize: 50,
        fontFamily: 'AmaticBold', 
    }
});
export default DayListItem;