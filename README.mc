# https://www.youtube.com/watch?v=GZ_QSVDTQRw

# instalar navigation
expo install @react-navigation/native
expo install react-native-screens react-native-safe-area-context

expo install @react-navigation/native-stack

expo install react-native-animatable

# https://github.com/university-lessons/dpdm-sqlite-expo-repository/blob/main/app/Home.tsx
# https://www.youtube.com/watch?v=a2kaHGf8XfA
# npx expo install expo-sqlite


winget install --id Git.Git -e --source winget

git init
git -v
git status
git add .
git commit -m "msg - primeiro commit"



# renomear de master para main
git branch -M "main"

git push -u origin main
git remote add origin https://github.com/ivomarcarvalho/fvendas.git
git push -u origin main

# em caso de erro push forçado
git push -f origin main
