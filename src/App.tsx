import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const INITIAL_RAT_LOCATIONS = [
  true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
];

const App: React.FC<{}> = (props) => {
  const styles = useStyles();
  const [ratLocations, setRatLocations] = useState<boolean[]>(INITIAL_RAT_LOCATIONS);

  const onDoorClicked = (index: number) => {
    let newRatLocations = ratLocations.map(_ => false);
    ratLocations.forEach((location, i) => {
      if (location && i !== index) {
        if (i - 1 >= 0) newRatLocations[i - 1] = true;
        if (i + 1 < ratLocations.length) newRatLocations[i + 1] = true;
      }
    });
    setRatLocations(newRatLocations);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Rat Riddle</h1>
        <button style={{width: '4%', height: '2vh'}} onClick={() => setRatLocations(INITIAL_RAT_LOCATIONS)}>Reset</button>
      </div>
      <div className={styles.doorsContainer}>
        {ratLocations.map((ratLocation, index) =>
          <div key={index} className={styles.doorContainer} onClick={() => onDoorClicked(index)}>
            <img
              className={styles.door}
              style={{borderColor: ratLocation ? 'red' : 'green'}}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F2cd43b_3d21a2ac1f394a8fbe808bbfa5f302f5~mv2_d_1279_2699_s_2.png%2Fv1%2Ffill%2Fw_162%2Ch_341%2Cfp_0.50_0.50%2F2cd43b_3d21a2ac1f394a8fbe808bbfa5f302f5~mv2_d_1279_2699_s_2.png&f=1&nofb=1">
            </img>
          </div>)}
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  pageContainer: {
    width: '98.5vw',
    height: '100vh',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontFamily: 'monospace',
    fontSize: '300%',
    color: 'forestgreen',
    alignSelf: 'center'
  },
  doorsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '6%'
  },
  doorContainer: {
    width: '2.3%'
  },
  door: {
    width: '100%',
    borderWidth: '3px',
    borderStyle: 'solid',
  }
})

export default App;
