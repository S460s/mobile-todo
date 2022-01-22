import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeOutView = props => {
  const fadeAnim = useRef(new Animated.Value(props.isNew ? 0 : 1)).current;
  console.log(props.isNew + ' 123');
  useEffect(() => {
    if (props.fade || props.isNew) {
      Animated.timing(fadeAnim, {
        toValue: props.isNew ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, props.fade, props.isNew]);

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
