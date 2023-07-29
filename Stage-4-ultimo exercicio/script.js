const students = [
  {
    name: "Wendell",
    FirstScore: 7.5,
    LastScore: 6.2,
  },
  {
    name: "Vitoria",
    FirstScore: 8,
    LastScore: 7,
  },
  {
    name: "Weslley",
    FirstScore: 4,
    LastScore: 3.3,
  }
]


function Calc(student) {

  let Media = (((student.FirstScore + student.LastScore) / 2).toFixed(1))
  if(Media >= 7) {
    alert(`Parabéns o aluno(a) ${student.name} esta APROVADO!!
    Recebeu a Media: ${(((student.FirstScore + student.LastScore) / 2).toFixed(1))} 
    `)
  } else {
    alert(`Ops... o aluno(a) ${student.name} esta REPROVADO !!
    Recebeu a Media: ${(((student.FirstScore + student.LastScore) / 2).toFixed(1))} 
    `)
  }
}

Calc(students[0])
Calc(students[1])
Calc(students[2])
