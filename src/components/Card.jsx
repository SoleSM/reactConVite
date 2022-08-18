import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import { useState } from 'react';


const mockdata = [
  { title: 'Kim Namjoon'},
  { title: 'Kim Seokjin'},
  { title: 'Min Yoongi'},
  { title: 'Jung Hoseok'},
  { title: 'Park Jimin'},
  { title: 'Kim Taehyung'},
  { title: 'Jeon Jungkook'},
  { title: 'BTS' },
  { title: 'Bang PD' },
];



  
  

export function ActionsGrid() {

  

  const [ tarjeta, setTarjeta ] = useState("")

  const accion = ()  => {

    mockdata.map((title, indice) => {
     
      if(mockdata[indice].title === "Jeon Jungkook"){
        setTarjeta("Jungkook")
    
        console.log(tarjeta)
      }
    })
  
    
  
  }
    



  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (

   
    
    <UnstyledButton key={item.title} className={classes.item}>
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (

     //El simpleGRID es donde se ve el nombre de cada tarjeta
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Members</Text>
      </Group>
      <SimpleGrid cols={3} mt="md"
      onClick={accion}>
        {items}
      </SimpleGrid>
    </Card>
  );
}



//------------------------------------------------------------------------------------------
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.red[2],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
      backgroundColor: `${theme.colors.blue[2]}`
    },
  },
}));

export default ActionsGrid;