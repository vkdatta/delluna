export const name="nuclear-plant";
export const id="dl_21820646c1f841ed8464";
export const url=new URL("../icons/nuclear-plant.svg?v=9b72ec3b3612da58a8a1d1c7dd124ebb10da4447ca61bf2a3e4c0f3ea6ce1bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
