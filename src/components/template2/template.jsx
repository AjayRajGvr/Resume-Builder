import React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { styles } from "./template-styles";
import Header from "./header";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

const TemplateTwo = (props) => {
  const { data } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          name={data?.fullName}
          email={data?.email}
          address={data?.address}
          city={data?.city}
          state={data?.state}
          phone={data?.phone}
        />
        <View>
          <Skills skillsList={data?.skillsList} />
          <View style={styles.eduContent}>
            <Experience data={data?.experienceDetails} />
            <Education data={data?.educationDetails} />
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default TemplateTwo;
