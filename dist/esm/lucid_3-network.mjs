export const name="lucid_3-network";
export const id="dl_295e7bab9bdd4c1e8e43";
export const url=new URL("../icons/lucid_3-network.svg?v=3b3783ec2f5ec428c45771625174683f772d45989c5623bd0b16004dd118e8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
