const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testDB");

import {saveUser} from '../controller/test1';

saveUser();


