export const name="hand-swipe-left";
export const id="dl_d85476c18f79407bbbbe";
export const url=new URL("../icons/hand-swipe-left.svg?v=3d687950cb346e4077e718d4d0d0329fbd7a4ee9a8836acd535b13aae2109bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
