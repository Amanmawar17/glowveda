import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function BlogsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      return <p>You need to login to view this page.</p>;
    }
    return (
        <div>{children}</div>
    )}