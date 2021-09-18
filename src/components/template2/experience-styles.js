import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  entryContainer: {
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato Italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
    marginLeft: 40,
  },
});
