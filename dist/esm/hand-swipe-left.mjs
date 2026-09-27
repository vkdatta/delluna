export const name="hand-swipe-left";
export const id="dl_d85476c18f79407bbbbe";
export const url=new URL("../icons/hand-swipe-left.svg?v=210a86cdcb9bbd4c4340c68b432b9a711192d96af8504a37b245ae6d0d9ca2d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
