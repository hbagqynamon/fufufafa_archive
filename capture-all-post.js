// capture whole web page and save as picture to directoryOutput

import captureWebsite from 'capture-website';
import fs from 'fs';
import moment from 'moment';

var archiveJsonFile = 'fufufafa_archive_kaskus.json';
var directoryOutput = 'capture';

scWeb();

// capture whole web page and save as picture to directoryOutput
async function scWeb(max = 100) {
    var data = JSON.parse(fs.readFileSync(archiveJsonFile).toString());
    var ctr = 0;
    for (var d of data) {
        if (d.ref) {
            var url = 'https://www.kaskus.co.id/show_post/' + d.ref;
            var date = moment(d.date, 'DD-MM-YYYY HH:mm').format('YYYYMMDDHHmm');
            var filename = directoryOutput + '/' + date + '_' + d.ref + '.png';
            if (d.ref.includes('???')) {
                filename = directoryOutput + '/' + d.ref.replace('???', '') + '_' + '.png';
            }
            console.log('Capture ' + url + ' saved to ' + filename);
            if (fs.existsSync(filename)) continue;
            await captureWebsite.file(url, filename, { fullPage: true, hideElements: ['.w-336p.flex-none'] });
            ctr++;
        }
        if (ctr == max) break;
    }
}