export const name="lucid_3-picture-in-picture";
export const id="dl_82dcf802705a40499044";
export const url=new URL("../icons/lucid_3-picture-in-picture.svg?v=73d9879c945b7403c3046077f2336e0d22cceaf598b32028defad07434ca14b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
