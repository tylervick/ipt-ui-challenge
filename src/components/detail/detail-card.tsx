import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { memo } from 'react';

interface DetailCardProps {
  label: string;
  value: string;
}

const DetailCard = memo(function DetailCard({ label, value }: DetailCardProps) {
  return (
    <Card className='z-50'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
      </CardContent>
    </Card>
  );
});

export { DetailCard };
