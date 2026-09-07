export const name="tent-duotone";
export const id="dl_5e3e94a9f2654da9b83f";
export const url=new URL("../icons/T/tent-duotone.svg?v=82a134d8060cacea91b32ffc2c5b09ed6d9a8ebc40f8bd57669c777bff8c69a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
