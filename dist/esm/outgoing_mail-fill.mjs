export const name="outgoing_mail-fill";
export const id="dl_1dee2ffb7f86259d29fe";
export const url=new URL("../icons/outgoing_mail-fill.svg?v=17e3d287d8913abe79958a749b502d8ec626a5581cbb6548a4c6bb5c4a4b50a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
