export const name="splitscreen_landscape";
export const id="dl_34cf0f0436d15796f720";
export const url=new URL("../icons/splitscreen_landscape.svg?v=bcb4874c9aea10d3dd9814b42fdab04dc63a77c6de6dc45cd98d2045f525d630",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
