export const name="grid_3x3-fill";
export const id="dl_b87b01ffd23502e4830a";
export const url=new URL("../icons/grid_3x3-fill.svg?v=b13a4fd9ab98f8775ff06cc11f727a0f574f8a743894730dd9224342a457f1c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
