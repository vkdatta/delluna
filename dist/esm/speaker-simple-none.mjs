export const name="speaker-simple-none";
export const id="dl_d8338d19aefbac2528b5";
export const url=new URL("../icons/speaker-simple-none.svg?v=58218299541af3459972fdb0d7d1641b7c7433b283430653e4cf9d2a8e4fdc86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
