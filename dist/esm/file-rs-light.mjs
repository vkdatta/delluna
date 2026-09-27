export const name="file-rs-light";
export const id="dl_66cac8fb708544deb75f";
export const url=new URL("../icons/file-rs-light.svg?v=8edfd0a4dc9e3ffbac2fe1ec2f7bd44a4311d87b1d8b04d8e63013dadc2b7ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
