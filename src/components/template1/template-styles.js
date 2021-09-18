import { Font, StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  eduContent: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  leftColumn: {
    flexDirection: "column",
    width: 150,
    paddingTop: 30,
    paddingRight: 15,
  },
});

Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});
