export const name="lucid_1-cigarette";
export const id="dl_db1c02aa63e64e85bb62";
export const url=new URL("../icons/lucid_1-cigarette.svg?v=836c9b79a2823fec51072e2af0f332996656a8a911dcc2abf607254bfe5837d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
