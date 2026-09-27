export const name="disabled_visible-fill";
export const id="dl_cea039892ed8d9014409";
export const url=new URL("../icons/disabled_visible-fill.svg?v=c41a7cfb3b051249cd825eb66fade20cf350215ea3dbb86f20e5c6584600e810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
