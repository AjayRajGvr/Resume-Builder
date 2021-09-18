import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./skills-styles";
import Title from "./title";

const Skills = ({ skillsList = [""] }) => (
  <View style={styles.container}>
    <Title>Skills</Title>
    <View style={styles.skillContainer}>
      {skillsList?.map((skill, i) => (
        <View key={i}>
          <Text key={i} style={styles.skills}>
            {skill}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export default Skills;
