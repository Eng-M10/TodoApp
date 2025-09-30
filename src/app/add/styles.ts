import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        marginTop: 24
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    titleContainer: {
        width: "90%",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        color: colors.blue[600]
    },
    form: {
        padding: 20,
        gap: 18,
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
    },
    input: {
        width: "100%",
        borderWidth: .2,
        borderRadius: 12,
        padding: 12,
        borderColor: colors.blue[900]
    },
    textarea: {
        width: "100%",
        borderWidth: .2,
        borderRadius: 12,
        padding: 12,
        borderColor: colors.blue[900],
        height: 120,
    },
    button: {
        marginTop: 24,
        backgroundColor: colors.orange[500],
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    dateTextContainer: {
        borderColor: colors.blue[800],
        borderWidth: .2,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
    },
    dateText: {
        fontSize: 16,
        color: colors.gray[600],
        fontWeight: "200",
        textAlign: "left",
    }

});