import React from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { styles } from "./template-styles";
import Header from "./header";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

const TemplateOne = (props) => {
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
          <View style={styles.content}>
            <View style={styles.leftColumn}>
              <Skills skillsList={data?.skillsList} />
            </View>
            <View>
              <Experience data={data?.experienceDetails} />
            </View>
          </View>
          <Education data={data?.educationDetails} />
        </View>
      </Page>
    </Document>
  );
};
export default TemplateOne;
