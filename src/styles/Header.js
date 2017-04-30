import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header-component': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#f00' }]
  },
  // HEADER
  'header h3': {
    'color': '#57585A'
  },
  'basic-info': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'basic-info h4': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#818386'
  },
  'profile-picture': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'social-container': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'social b': {
    'color': '#57585A',
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'basic-info': {
    'paddingTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'profile-picture': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'borderRadius': '100px',
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#343E78' }]
  },
  'social-image': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'social': {
    'marginTop': [{ 'unit': 'px', 'value': 7 }]
  },
  // END HEADER
});
