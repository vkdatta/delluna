export const name="hand-coins-duotone";
export const id="dl_28af178fc76249ba989f";
export const url=new URL("../icons/hand-coins-duotone.svg?v=f6bc2b68605a7d9c2f3717d4202149f866abe0006a06497b6c8be958c39601c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
