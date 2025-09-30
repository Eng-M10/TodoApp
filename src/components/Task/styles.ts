import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        padding: 14,
        borderColor: colors.blue[800],
        borderWidth: .3,
        borderRadius: 13,

    },
    detailsbox: {
        gap: 2

    },
    checkbutton: {
        borderRadius: 100,
        borderWidth: .5,
        width: 30,
        height: 30,
    },
    tasktitle: {
        color: colors.orange[500]
    }
})