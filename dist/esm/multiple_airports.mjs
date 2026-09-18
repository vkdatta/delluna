export const name="multiple_airports";
export const id="dl_f5c25120d1374e0aaf9a";
export const url=new URL("../icons/multiple_airports.svg?v=f117d545586f474bb552386c9fb05d0b34f2b002998aa075e84690c762aec73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
