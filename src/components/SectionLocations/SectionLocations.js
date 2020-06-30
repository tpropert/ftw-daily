import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import hyderabadImage from './images/location_hyderabad.png';
import commercialImage from './images/location_commercial.png';
import secImage from './images/location_secunderabad.png';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Hyderabad',
          hyderabadImage,
          '?address=Hyderabad%2C%20Telangana%2C%20India&bounds=17.8052168644129%2C78.7640932269928%2C17.1461201710643%2C78.1176188856332'
        )}
        {locationLink(
          'Nalgonda',
          commercialImage,
          '?address=Nalgonda%2C%20Telangana%2C%20India&bounds=17.3552381381833%2C79.5819466865101%2C16.9008202242747%2C78.7627721873408'
        )}
        {locationLink(
          'Secunderabad',
          secImage,
          '?address=Secunderabad%2C%20Telangana%2C%20India&bounds=17.5063036094269%2C78.5503263866712%2C17.4110920051661%2C78.4549897041139'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
