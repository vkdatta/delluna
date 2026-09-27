export const name="pint-glass-light";
export const id="dl_da16fa19fe3348bbb835";
export const url=new URL("../icons/pint-glass-light.svg?v=2ec51a85ceafbfc94437c21674fd286b1b117f3ab63a90c2dae8bc3a89e465ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
