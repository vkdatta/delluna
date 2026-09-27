export const name="arrows-out-cardinal-bold";
export const id="dl_032455ccf3034b42978d";
export const url=new URL("../icons/arrows-out-cardinal-bold.svg?v=8bcc3c7a896436795913f205c9b5701d0ee5d8750cd113c4633c23f5dd058b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
