import {getCurrentTimeStamp} from 'local/currtime.ts'
import camelCase  from 'lodash/camelCase'
import {bold, red} from 'fmt/colors.ts'

console.log(bold(camelCase("Using mapped local library: ")), red(getCurrentTimeStamp()))

