export const name="ev_shadow_minus-fill";
export const id="dl_2c6819f319c11ad99065";
export const url=new URL("../icons/ev_shadow_minus-fill.svg?v=7720e6bb8bc09a8718d933328cc03f23137606f58cd7849026ddedeb695fa7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
