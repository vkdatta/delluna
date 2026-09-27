export const name="fluid_balance";
export const id="dl_a7da06d409bc157fbecf";
export const url=new URL("../icons/fluid_balance.svg?v=efbfa6bdc428945738b6fb58ffbd28ad97a409e92a571ea2b33d60e63aca308d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
