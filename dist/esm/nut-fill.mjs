export const name="nut-fill";
export const id="dl_f609ac6e9b594f7b8af0";
export const url=new URL("../icons/nut-fill.svg?v=63480c6e06611d972537380df248490ed0dd916d7f50483f2806e92b765be5ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
