import { Pool }  from 'pg';
import config  from './db_config.json';
export const pool = new Pool(config);



