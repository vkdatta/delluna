export const name="grid_3x3_off-fill";
export const id="dl_efa027faec5fced3f057";
export const url=new URL("../icons/grid_3x3_off-fill.svg?v=811473b0a324a0bf4c7a267bfa588454382515ffb18912af7808eaa2b973067c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
