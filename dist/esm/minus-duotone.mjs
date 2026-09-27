export const name="minus-duotone";
export const id="dl_dd399fb72ee84a7aa32a";
export const url=new URL("../icons/minus-duotone.svg?v=2bcc12fd3f598c7394ad14fc8cd7f665504ee3f67bdf23d5ffc5d0571648039a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
