export const name="arrow-bend-right-up-duotone";
export const id="dl_fa7364ddb08949b19059";
export const url=new URL("../icons/arrow-bend-right-up-duotone.svg?v=ac001e982f70fde54d83c7c1c2af00864050de63ad814fb8af025c2a7ab55063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
