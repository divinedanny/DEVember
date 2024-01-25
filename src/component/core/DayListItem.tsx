import {Text, FlatList, View, StyleSheet} from 'react-native';

type DayListItemProps = {
    day: number;
}

function DayListItem({day}: DayListItemProps) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
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