import { Button, Container, Stack, Typography } from "@mui/material"
// import { pad } from "lodash"
import { useNavigate } from "react-router-dom"

const btnSytle={
  backgroundColor: "blue",
  border: "1px solid blue",
  color: "white",
  cursor: "pointer",
  padding: "1rem",
}
const styles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  padding: "1rem",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
}
const languages = [
  {
    name: 'Hindi',
    code: 'hi'
  },
  {
    name: 'Spanish',
    code: 'es'
  },
  {
    name: 'French',
    code: 'fr'
  },
  {
    name: 'Arabic',
    code: 'ar'
  },
  {
    name: 'Portuguese',
    code: 'pt'
  },
  {
    name: 'Bengali',
    code: 'bg'
  },
  {
    name: 'Russian',
    code: 'ru'
  },
  {
    name: 'Japanese',
    code: 'ja'
  },
  {
    name: 'German',
    code: 'de'
  },
  {
    name: 'Korean',
    code: 'ko'
  },
  {
    name: 'Telugu',
    code: 'te'
  },
  {
    name: 'Turkish',
    code: 'tr'
  },
  {
    name: 'Tamil',
    code: 'ta'
  },
  {
    name: 'Marathi',
    code: 'mr'
  },
  {
    name: 'Urdu',
    code: 'ur'
  },
  {
    name: 'Vietnamese',
    code: 'vi'
  },
  {
    name: 'Italian',
    code: 'it'
  },
  {
    name: 'Persian',
    code: 'fa'
  },
  {
    name: 'Gujarati',
    code: 'gu'
  },
  {
    name: 'Polish',
    code: 'pl'
  }
]

const Home = () => {

  const navigateToLearning = useNavigate();
  const languageSelectHandler = (language: string): void => {
    navigateToLearning(`/learn?laguage=${language}`)
  }
  return (
    <Container maxWidth={"md"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome to Language Learning App
      </Typography>
      <Stack style={styles} >
        {
          languages.map((language) => (
            <Button style={btnSytle} onClick={() => languageSelectHandler(language.code)} variant="contained" key={language.code} >
              {language.name}
            </Button>
          ))
        }
      </Stack>
      <Typography textAlign={"center"}>
        Choose a language to start learning
      </Typography>
    </Container>
  )
}

export default Home