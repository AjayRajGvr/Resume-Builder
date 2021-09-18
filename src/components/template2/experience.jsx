import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./experience-styles";
import Title from "./title";
import List, { Item } from "./list";

const ExperienceEntry = (props) => {
  const {
    company = "",
    description = "",
    designation = "",
    fromDate = "",
    toDate = "",
  } = props;
  const title = `${company} | ${designation}`;
  const date =
    fromDate?.length && toDate?.length ? `${fromDate}  -   ${toDate}` : "";

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

const Experience = (props) => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {props?.data?.map(({ company, from, to, description, designation }) => (
      <ExperienceEntry
        company={company}
        fromDate={from}
        toDate={to}
        description={description}
        key={company + designation}
        designation={designation}
      />
    ))}
  </View>
);

export default Experience;
