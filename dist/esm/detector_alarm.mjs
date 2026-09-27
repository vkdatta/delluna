export const name="detector_alarm";
export const id="dl_f5b66d9eeae7b6422a14";
export const url=new URL("../icons/detector_alarm.svg?v=4d56b16ce125b551c71c6bc04f8e5b8e7e90414f2109fa10802619fefea4c72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
