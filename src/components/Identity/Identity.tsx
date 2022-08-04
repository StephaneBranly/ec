import React from 'react';
import { Identity as IdentityType } from '../../types';
import { has } from 'lodash';
import Moment from 'moment';
import Flag from 'react-world-flags'
import iso3311a2 from 'iso-3166-1-alpha-2'

export interface IdentityProps {
  identity: IdentityType
}

const Identity = (props: IdentityProps) => {
  const { identity } = props;
  const displayName = () => {
      return <div>{`${identity.lastName || ''} ${identity.firstName || ''}`}</div>;
  }
  const displayAddress = () => {
      return  <div>{`${identity.address || ''}`}</div>;
  }
  const displayNationality = () => {
      const code = identity.nationality
      const country = iso3311a2.getCountry(code)
      return  <div><Flag code={code} height="16" />{country}</div>
  }
  const displayDateOfBirth = () => {
      if(has(identity, 'dateOfBirth'))
      {
          const timeDiff = Math.abs(Date.now() - identity.dateOfBirth!.getTime());
          const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
          const moment = Moment(identity!.dateOfBirth!);
          return  <div>{`${`${moment.format('MMM Do YYYY')} (${age} years old)`}`}</div>;
      }
      return ''
  }

    return (
        <>
          {displayName()}
          {displayDateOfBirth()}
          {displayAddress()}
          {displayNationality()}
        </>
    )
}

export default Identity
