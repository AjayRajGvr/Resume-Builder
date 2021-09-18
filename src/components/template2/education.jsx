import React from "react";
import { Text, View } from "@react-pdf/renderer";
import List, { Item } from "./list";
import { styles } from "./education-styles";
import Title from "./title";

const EducationEntry = (props) => {
  const {
    institute = "",
    description = "",
    degree = "",
    fromDate = "",
    toDate = "",
  } = props;
  const title = `${institute} | ${degree}`;
  const date =
    fromDate?.length && toDate?.length ? `${fromDate}  -  ${toDate}` : "";

  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        <Item style={styles.detailContainer}>{description}</Item>
      </List>
    </View>
  );
};

const Education = (props) => (
  <View style={styles.container}>
    <Title>Education</Title>
    {props?.data?.map(({ institute, from, to, description, degree }) => (
      <EducationEntry
        institute={institute}
        fromDate={from}
        toDate={to}
        degree={degree}
        key={institute + degree}
        description={description}
      />
    ))}
  </View>
);
export default Education;
