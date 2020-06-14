import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
  const theme = useTheme();
  const { title, label, data } = props;

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {label}
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}