import styled, {css} from 'styled-components'
import {Link }  from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/logos.svg';

const OptionsContainerStyles = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border: 2px solid red;
    border-radius: 12px;
  
`
export const LogoContainer = styled(Link)`
    display : flex;
    justify-content : center;
    align-items : center;
    height: 100%;
    width: 10%;
    /* margin-top: -25px; */
`
export const LogoImage = styled(Logo)`
    height : 100%;
    width: 100%;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const OptionLink = styled(Link)`
    ${OptionsContainerStyles}
`
export const OptionDiv = styled.div`
    ${OptionsContainerStyles}
`
export const OptionP = styled.p`
    ${OptionsContainerStyles}
`