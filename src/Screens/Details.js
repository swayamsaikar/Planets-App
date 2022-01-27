import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // extracting the name,distance etc from planetDetails route
    var { name, gravity, mass, radius, distance } =
      this.props.route.params.planetDetails;
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Here are some details about {name}
        </Text>

        <View
          style={{
            height: "65%",
            width: "90%",
            elevation: 5,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: "5%",
          }}
        >
          <Text style={styles.textStyle}>Planet Name - {name}</Text>
          <Text style={styles.textStyle}>
            Planet Gravity - {Math.floor(gravity)}
          </Text>
          <Text style={styles.textStyle}>Planet Distance - {distance}</Text>
          <Text style={styles.textStyle}>Planet Mass - {mass}</Text>
          <Text style={styles.textStyle}>Planet Radius - {radius}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: 30,
  },
});
