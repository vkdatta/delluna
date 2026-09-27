export const name="grid_on-fill";
export const id="dl_6a57129e6fe996e10127";
export const url=new URL("../icons/grid_on-fill.svg?v=98b1c3c75312f0f02b15a241d73731b23c06e61ef57498ccd08d6d7055d07b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
