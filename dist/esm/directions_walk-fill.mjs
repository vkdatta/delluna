export const name="directions_walk-fill";
export const id="dl_4b058274d401ac6d52e0";
export const url=new URL("../icons/directions_walk-fill.svg?v=fef6c8239f8b2a0a1b6c627c59608459db98b97179644a1fc9bcfb1e1bec31b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
