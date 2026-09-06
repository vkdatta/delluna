export const name="lucid_3-message-circle-warning";
export const id="dl_cf0fd172ff1d47e6a76b";
export const url=new URL("../icons/lucid_3-message-circle-warning.svg?v=77153851ec2465e979b50666007f219067e7100369401a46b19a76ecabf3805b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
