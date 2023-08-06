import {Stack} from "expo-router"
import "./../global.css";


export function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}
