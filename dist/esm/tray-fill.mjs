export const name="tray-fill";
export const id="dl_d50defa0d17c4fc69392";
export const url=new URL("../icons/T/tray-fill.svg?v=8e0ed750696c01ef6e418436275501e4467c66b6f88688e1d0ac86e84a296b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
