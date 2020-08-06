import styled from 'styled-components'

export const AboutContainer = styled.div`
  margin-bottom: 15px;
  color: #e8e8e8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const DPContainer = styled.div`
  position: relative;
  height: 65vh;
  @media (max-width: 768px) {
    height: 80vh;
  }
  @media (max-width: 480px) {
    height: 45vh;
  }
  @media (max-width: 320px) {
    height: 30vh;
  }
  overflow: hidden;
`

export const DisplayPicture = styled.img`
  width: 100%;
  pointer-events: none;
`