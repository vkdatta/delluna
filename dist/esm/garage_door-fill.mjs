export const name="garage_door-fill";
export const id="dl_711b2485b81266ae6bb7";
export const url=new URL("../icons/garage_door-fill.svg?v=d9af03f4534c7a1f0304b286d22215d35e1ea66292027c0f5fb429b0f290665f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
