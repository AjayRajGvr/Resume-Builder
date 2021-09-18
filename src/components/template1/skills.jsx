import React from "react";
import { View } from "@react-pdf/renderer";
import { styles } from "./skills-styles";
import Title from "./title";
import List, { Item } from "./list";

const Skills = ({ skillsList = [""] }) => (
  <View>
    <Title style={styles.title}>Skills</Title>
    {skillsList?.map((skill, i) => (
      <List key={i}>
        <Item key={i} style={styles.skills}>
          {skill}
        </Item>
      </List>
    ))}
  </View>
);

export default Skills;
