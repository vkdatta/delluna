export const name="password_2-fill";
export const id="dl_5b9124e52b2b97bfa1eb";
export const url=new URL("../icons/password_2-fill.svg?v=d026013975daf5a9fdf0b73e3d8a59b4697f081757f239947e12aedbd64d87a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
