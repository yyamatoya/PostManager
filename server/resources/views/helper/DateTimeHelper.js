import moment from "moment";
import 'moment/dist/locale/ja';

export function getCurrentDateTime(format='LTS') {
    return moment().locale("ja").format(format);
}
