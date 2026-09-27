export const name="hourglass_arrow_down";
export const id="dl_ac9272b414bf6ca66db8";
export const url=new URL("../icons/hourglass_arrow_down.svg?v=5e0efcbd12682e4756144d590acb886110ae67fea380bca3709f7877c7da28ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
