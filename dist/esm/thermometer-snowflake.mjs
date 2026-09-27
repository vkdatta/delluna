export const name="thermometer-snowflake";
export const id="dl_e445b60371df43fead84";
export const url=new URL("../icons/thermometer-snowflake.svg?v=5940f55fb52258f1b3443b47163dbf171dcbdcad5bc1d1459c3c4bad40972f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
