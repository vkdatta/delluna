export const name="local_gas_station-fill";
export const id="dl_a080958260a055007cfe";
export const url=new URL("../icons/local_gas_station-fill.svg?v=5043272ddb023269f04282024c3e66ed057512dbf9750cfec5fd3f2cd17b74bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
