interface GetWeekDaysParams {
  short?: boolean
}

export default function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formartter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formartter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}

interface GetWeekDaysParams {
  short?: boolean
}
