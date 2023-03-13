export const usagePerTeamRawData = {
  chartName:'팀별 사용량',
  label : ["team1", "team2", "team3", "team4"],
  data : [20, 10, 30, 15]
}

export const usagePerTimeRawData = {
  chartName: "시간대별 사용량",
  labels : [
    "2021-04-16-00:00", 
    "2021-04-16-01:00", 
    "2021-04-16-02:00", 
    "2021-04-16-03:00", 
    "2021-04-16-04:00", 
    "2021-04-16-05:00",
  ],
  label: 'line_name',
  data : [20, 10, 30, 15, 32, 11, 23]
}

export const usagePerTimeHourRawData = {
  chartName: '시간대별 팀별 사용량',
  labels : ["time1", "time2", "time3", "time4", "time5"],
  datas: [
    { label: 'team1', data: [33, 53, 85, 41, 44, 65], },
    { label: 'team2', data: [33, 25, 35, 51, 54, 76] },
    { label: 'team3', data: [13, 15, 25, 21, 54, 76] },
    { label: 'team4', data: [63, 9, 14, 11, 22, 12] },
    { label: 'team5', data: [62, 9, 22, 33, 12, 54] },
  ]
}
export const stackedUsagePerTeamRawData = {
  chartName:'팀별 누적 사용량',
  labels: ["IM1", "IGH", "ICE", "IRM", "Lighthouse"],
  data: [
    {
      id: 0, // user id 
      stack: 0, // team index 
      username: "ann",
      data: 100
    },
    {
      id: 1, // user id 
      stack: 0, // team index 
      username: "ben",
      data: 200
    },
    {
      id: 3, // user id 
      stack: 0, // team index 
      username: "ken",
      data: 100
    },
    {
      id: 4,
      stack: 1,
      username: 'bell',
      data: 30
    },{
      id: 5,
      stack: 1,
      username: 'merry',
      data: 120
    },
    {
      id: 6,
      stack: 2,
      username: 'werl',
      data: 243
    },
    {
      id: 7,
      stack: 3,
      username: 'wkjgd',
      data: 100
    },
    {
      id: 8,
      stack: 3,
      username: 'sgsdf',
      data: 102
    },
    {
      id: 9,
      stack: 4,
      username: 'alksd',
      data: 209
    },
    {
      id: 10,
      stack: 4,
      username: 'asdks',
      data: 120
    },
  ]
}

export const StackedUsageRawData = {
  chartName: '누적 사용 건수',
  data: 3070
}

export const RequestCountsRawData = {
  chartName: '사업자번호 요청 갯수',
  data: 62419,
};


