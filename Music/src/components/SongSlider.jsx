import Slider from '@react-native-community/slider';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TrackPlayer, { useProgress, useTrackPlayerEvents, TrackPlayerEvents } from 'react-native-track-player';

const SongSlider = () => {
  const { position, duration } = useProgress();




  

 

  const handleValueChange = async (value) => {
    try {
      await TrackPlayer.seekTo(value);
    } catch (error) {
      console.error('Error seeking to position:', error);
    }
  };

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#FFF'
        maximumTrackTintColor='#FFF'
        style={styles.sliderContainer}
        onValueChange={handleValueChange}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {new Date(position * 1000).toISOString().substring(14, 19)}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000).toISOString().substring(14, 19)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
  },
  timeContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
  },
});

export default SongSlider;
