export const name="location_on";
export const id="dl_85848ab5aa31c6ca9000";
export const url=new URL("../icons/location_on.svg?v=5494478caa7fb2e232c403b42f667b203fe9780238006f85a2ddbc6c2b55574b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
