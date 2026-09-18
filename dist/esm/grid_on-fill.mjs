export const name="grid_on-fill";
export const id="dl_e5d46f722f9e4b4abbe4";
export const url=new URL("../icons/G/grid_on-fill.svg?v=98b1c3c75312f0f02b15a241d73731b23c06e61ef57498ccd08d6d7055d07b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
