import React, { useState } from 'react'




import Auth from 'components/Auth/Index'
import TodoForm from 'components/Forms/TodoForm'
import TodoTable from 'components/Tables/TodoTable'
import { useStyles } from 'App.styles';
// import Text from 'components/Text/Text'
// import colors from 'constants/colors';

const Todo = props => {
  const css = useStyles();
  const [fetch, setfetch] = useState(true);
  return (
    <div className={css.center}>
      <div className={css.innerCenter}>
        <TodoTable reFecth={()=> setfetch(!fetch)} fetch={fetch} />
        <TodoForm  reFecth={()=> setfetch(!fetch)} />
      </div>
    </div>
  );
}

export default Auth(Todo);
