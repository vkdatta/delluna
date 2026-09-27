export const name="tire-light";
export const id="dl_fe7762ce4b0fc1115278";
export const url=new URL("../icons/tire-light.svg?v=73c858a2c9f47e3420c3465c50bd315724ac869a9b04cb0e24679d7a855e20b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
