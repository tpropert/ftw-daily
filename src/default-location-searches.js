import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-hyderabad',
    predictionPlace: {
      address: 'Hyderabad, Telangana',
      bounds: new LatLngBounds(new LatLng(17.8052168644129, 78.7640932269928), new LatLng(17.1461201710643, 78.1176188856332)),
    },
  },
  {
    id: 'default-secunderabad',
    predictionPlace: {
      address: 'Secunderabad, Telangana',
      bounds: new LatLngBounds(new LatLng(17.5063036094269, 78.5503263866712), new LatLng(17.4110920051661, 78.4549897041139)),
    },
  },
  {
    id: 'default-nalgona',
    predictionPlace: {
      address: 'Nalgonda, Telangana',
      bounds: new LatLngBounds(new LatLng(17.3552381381833, 79.5819466865101), new LatLng(16.9008202242747, 78.7627721873408)),
    },
  },
  {
    id: 'default-miryalguda',
    predictionPlace: {
      address: 'Miryalguda, Telangana',
      bounds: new LatLngBounds(new LatLng(17.0940400271967, 79.6860815189781), new LatLng(16.5463200558826, 79.1584457291716)),
    },
  },
  {
    id: 'default-ruka',
    predictionPlace: {
      address: 'Suryapet, Telangana',
      bounds: new LatLngBounds(new LatLng(17.1634319489859, 79.6493948868708), new LatLng(17.1120892667856, 79.5975546001697)),
    },
  },
];
