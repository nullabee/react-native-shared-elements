import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Dimensions,
  ListView,
  View
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import PHOTOS from './../shared/data';
import { processImages, buildRows, normalizeRows } from './../shared/utils';
import PhotoGallery from './../shared/PhotoGallery';
import GridItem from './../shared/GridItem';

const maxWidth = Dimensions.get('window').width;


export default class SharedElementsScreen extends React.Component {
  static navigationOptions = {
    title: 'Shared Elements',
  };

  componentWillMount() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(rows)
    });
  }

  renderRow = (onPhotoOpen, row) =>
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
      }}
    >
      {row.map(item =>
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
      )}
    </View>;

  render() {
    return (
      <PhotoGallery
        renderContent={({ onPhotoOpen }) =>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this, onPhotoOpen)}
          />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
