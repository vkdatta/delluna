export const name="align_horizontal_left-fill";
export const id="dl_ae851d3be7fdc0db4d53";
export const url=new URL("../icons/align_horizontal_left-fill.svg?v=8695f9dc420cbfc8581bb9a3e3bd3b2753884c9b2aaba5c735a274be5d60850d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
