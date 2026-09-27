export const name="face-mask-duotone";
export const id="dl_de8e3502fb81470e948d";
export const url=new URL("../icons/face-mask-duotone.svg?v=afb5b6adec5c01cde4a344a8b38dc7790ed3090120a51a407e623e3e7ac1cf9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
