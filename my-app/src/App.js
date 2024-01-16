import { useState } from 'react';
import styles from './app.module.css';
import styled from 'styled-components';

const Div = styled.div`
    text-aling: center;
`;

export const App = () => {


return (
    <Div className={styles.app}>
<i className="fa fa-meetup"></i>
    </Div>
);
	
};
 