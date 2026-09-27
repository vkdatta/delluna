export const name="lucid_3-message-circle-warning";
export const id="dl_cf0fd172ff1d47e6a76b";
export const url=new URL("../icons/lucid_3-message-circle-warning.svg?v=3d1ee564fe4f2cbe9cffe8b60f1d29b859dd89a723e1bc3af1d77ba5345b3aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
