export const name="swap_driving_apps-fill";
export const id="dl_a412c605bafc40fbbeb4";
export const url=new URL("../icons/S/swap_driving_apps-fill.svg?v=9f8801d3d6b057b9d7039f9d8ce594c41b3cf8254d7163a5c67fbd41efc5f832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
