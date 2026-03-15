import { StyleSheet, Text, View, Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>

      <View style={styles.container}>
        <Image style={styles.image}
          source={require('../../assets/image/User-2.jpg')}
        />

        <Text style={{ fontSize: 24, color: 'white', padding: 10, textAlign: 'center' }}>Bem Vindo ao Cigarats!</Text>

        <View style={styles.diaryData}>
          <Text style={{ fontSize: 12, color: 'white', lineHeight:35, margin: 10,textAlign: 'center' }}>{"Último cigarro\n 2 h atrás"}</Text>
          <Text style={{ fontSize: 12, color: 'white', lineHeight: 35, margin: 10,textAlign: 'center'  }}>{"Cigarros fumados\n12"}</Text>
          <Text style={{ fontSize: 12, color: 'white', lineHeight: 35, margin: 10,textAlign: 'center' }}>{"Meta diária\n15"}</Text>
        </View>

        <View style={styles.calendar}>
          <Calendar
            firstDay={0}
            theme={{
              backgroundColor: '#da2020',
              calendarBackground: '#313131',
              textSectionTitleColor: '#fff',
              selectedDayBackgroundColor: '#ff0000',
              todayTextColor: '#ff0000',
              dayTextColor: '#fff',
              monthTextColor: '#fff',
              width: '300',
            }}
            onDayPress={day => {
              console.log('Dia selecionado', day);
            }}
          />
        </View>

       

      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  image: {
    width: '40%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  diaryData: {
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },

  calendar: {
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },

});