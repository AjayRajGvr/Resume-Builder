import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: "100%",
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
    },
  },
  entryContainer: {
    marginBottom: 10,
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
    justifyContent: "space-between",
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
    marginLeft: 50,
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
});
