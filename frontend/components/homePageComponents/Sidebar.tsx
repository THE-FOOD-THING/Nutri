import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const {  description, social, title } = props;

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'green.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3, textAlign: "right" }}>
        Visit us on GitHub:
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5, ml:50 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}