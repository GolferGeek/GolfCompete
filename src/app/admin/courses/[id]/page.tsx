import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import CourseHoleDetails from '@/components/admin/CourseHoleDetails';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  // Unwrap params using React.use() and add type assertion
  const unwrappedParams = React.use(params as any) as { id: string };
  const courseId = unwrappedParams.id;

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button
          component={Link}
          href="/admin/courses"
          startIcon={<ArrowBackIcon />}
          sx={{ mr: 2 }}
        >
          Back to Courses
        </Button>
        <Typography variant="h4" component="h1">
          Course Details
        </Typography>
      </Box>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <CourseHoleDetails courseId={courseId} />
      </Paper>
    </div>
  );
} 