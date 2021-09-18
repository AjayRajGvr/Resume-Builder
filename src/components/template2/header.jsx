import React from "react";
import { styles } from "./header-styles";
import { Link, Text, View } from "@react-pdf/renderer";

const Header = (props) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Text style={styles.link}>{props?.address}</Text>
      <Text style={styles.link}>{props?.city}</Text>
      <Text style={styles.link}>{props?.state}</Text>
      <Text style={styles.link}>{props?.phone}</Text>
      <Link href={`mailto:${props?.email}`} style={styles.link}>
        {props?.email}
      </Link>
    </View>
  </View>
);
export default Header;
