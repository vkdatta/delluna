export const name="accessible_forward-fill";
export const id="dl_b67170158724cd050448";
export const url=new URL("../icons/accessible_forward-fill.svg?v=94b562a3fdf0a77c2c1262be26a1ca3f74110804589807543fe0958852842a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
