export const name="infinity-light";
export const id="dl_f9656623799f4a27a4b9";
export const url=new URL("../icons/infinity-light.svg?v=8040488d78648016c40f367877eb75c2a12eb12d43157607064181d5dfb1a978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
