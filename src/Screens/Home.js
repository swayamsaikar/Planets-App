import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import { ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  getData = async () => {
    var req = await fetch(
      "https://66cd-2405-201-a00a-a06f-1c11-7823-b493-3403.ngrok.io/"
    );
    var res = await req.json();
    this.setState({ data: res.data, loading: false });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return this.state.loading ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <PacmanIndicator size={100} />
      </View>
    ) : this.state.loading === false && this.state.data.length === 0 ? (
      <View style={styles.main}>
        <Text>No Data Found</Text>
      </View>
    ) : (
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={10}
        renderItem={({ item }) => (
          <View style={{ margin: 10, borderRadius: 10 }}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 20, fontWeight: "bold" }}>
                  Planet Name : {item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{ fontSize: 15 }}>
                  Distance From Earth : {item.distance}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                size={30}
                color="#00b894"
                onPress={() => {
                  this.props.navigation.navigate("Details", {
                    planetDetails: item,
                  });
                }}
              />
            </ListItem>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
