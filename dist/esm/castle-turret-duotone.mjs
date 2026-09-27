export const name="castle-turret-duotone";
export const id="dl_7f62e77bb4574b3b9ad2";
export const url=new URL("../icons/castle-turret-duotone.svg?v=f4cad68008be991b33f1eb58ad84ce610c46293fe79779c567ac4a2fe78a6d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
