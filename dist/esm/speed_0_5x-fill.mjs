export const name="speed_0_5x-fill";
export const id="dl_ddd44594bec1d5d796e6";
export const url=new URL("../icons/speed_0_5x-fill.svg?v=69d0147fddc90f0eefb9a0543ef71ccf09afc4f1fe543215623825c755c5ccad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
