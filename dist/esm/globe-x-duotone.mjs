export const name="globe-x-duotone";
export const id="dl_60fb909c5b084a48b1a7";
export const url=new URL("../icons/globe-x-duotone.svg?v=b31305622cea9d5b23dfb0d373631a1c8351562533fbcd06c80309c05f316c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
