export const name="stream-fill";
export const id="dl_8efa44d9127ff5a1fc88";
export const url=new URL("../icons/stream-fill.svg?v=4d11f181529bcf9c3baf981236ab969e912936b3cc970a10f9a4484d25cf9995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
