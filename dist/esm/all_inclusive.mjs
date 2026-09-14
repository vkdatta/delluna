export const name="all_inclusive";
export const id="dl_b14fa2d0fcdd4ebab792";
export const url=new URL("../icons/A/all_inclusive.svg?v=0060981224c1ae98ff83e5d582b95b005d45d396205e4de0c53d7117944379d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
