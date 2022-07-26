import React, { Component } from 'react';
import { 
  ServicesContainer, 
  ServicesHeaderOne, 
  ServicesWrapper,
  ServicesCard, 
  ServicesIcon, 
  ServicesHeaderTwo, 
  ServicesDescription
} from './ServicesSection';
import { 
  ID,
  SERVICE_DESCRIPTION_1, 
  SERVICE_DESCRIPTION_2, 
  SERVICE_DESCRIPTION_3,
  SERVICE_HEADER_ONE,
  SERVICE_HEADER_TWO_1, 
  SERVICE_HEADER_TWO_2, 
  SERVICE_HEADER_TWO_3 
} from './ServicesSectionConstants';
import s4 from '../../images/s4.svg';
import s5 from '../../images/s5.svg';
import s6 from '../../images/s6.svg';

export class ServicesSection extends Component {
  render() {
    return (
      <ServicesContainer id={ID}>
        <ServicesHeaderOne>{SERVICE_HEADER_ONE}</ServicesHeaderOne>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={s4}/>
                <ServicesHeaderTwo>{SERVICE_HEADER_TWO_1}</ServicesHeaderTwo>
                <ServicesDescription>{SERVICE_DESCRIPTION_1}</ServicesDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={s5}/>
                <ServicesHeaderTwo>{SERVICE_HEADER_TWO_2}</ServicesHeaderTwo>
                <ServicesDescription>{SERVICE_DESCRIPTION_2}</ServicesDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={s6}/>
                <ServicesHeaderTwo>{SERVICE_HEADER_TWO_3}</ServicesHeaderTwo>
                <ServicesDescription>{SERVICE_DESCRIPTION_3}</ServicesDescription>
            </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    )
  }
}

export default ServicesSection