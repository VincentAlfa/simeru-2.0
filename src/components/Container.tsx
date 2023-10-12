import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className='flex'>{children}</div>;
};

export default Container;
