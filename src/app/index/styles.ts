import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container : {
        color: "#FFFF",
        padding:12,
        flex: 1
    },
    header : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    titleContainer : {
        width: "90%",
    },
    title : {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center", 
    },

});