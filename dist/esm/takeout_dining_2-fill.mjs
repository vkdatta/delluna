export const name="takeout_dining_2-fill";
export const id="dl_b3e351b1b86318be5e7a";
export const url=new URL("../icons/takeout_dining_2-fill.svg?v=26385a871305859f8e68314155b83c1b73eb6e155274ad6051a76e4ef52bbd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
