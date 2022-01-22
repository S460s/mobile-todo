import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeOutView = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  console.log(fadeAnim);
  useEffect(() => {
    if (props.fade) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, props.fade]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeOutView;
