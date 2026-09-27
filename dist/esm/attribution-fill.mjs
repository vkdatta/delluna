export const name="attribution-fill";
export const id="dl_7120d1db3e2e9b703cc0";
export const url=new URL("../icons/attribution-fill.svg?v=a7074de8dcc1999462136fae2ee251004117460ac06ba7f107f9998dd581d4b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
