export const name="tidal-logo-light";
export const id="dl_c2a7742eaf9570dde97a";
export const url=new URL("../icons/tidal-logo-light.svg?v=d20506e37128f3149ef646429f9335af6b3ca706e103364449168e306374c8fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
