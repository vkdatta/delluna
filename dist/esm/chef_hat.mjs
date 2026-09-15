export const name="chef_hat";
export const id="dl_d5d6cfdbff7d41eaa148";
export const url=new URL("../icons/C/chef_hat.svg?v=cc698696fcac3dad293caecc2177f02fa0a7815a05f17b4a23dd7dd5b2b2b12f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
