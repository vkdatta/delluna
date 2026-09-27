export const name="desktop-duotone";
export const id="dl_3aef17c0731146efb3d1";
export const url=new URL("../icons/desktop-duotone.svg?v=568d72b3d75ca32cd68f2301bb5918be03ea015eda0e53614a8644d64d7e06e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
