export const name="sensors_krx_off-fill";
export const id="dl_4b378131d1e54501a808";
export const url=new URL("../icons/sensors_krx_off-fill.svg?v=50b3a2d1ed3214ddece52ffc498dba72b7a4de7535b5c5b08c1be0da43ed1528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
