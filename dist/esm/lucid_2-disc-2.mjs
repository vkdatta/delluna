export const name="lucid_2-disc-2";
export const id="dl_2aaa1dec29b242409094";
export const url=new URL("../icons/lucid_2-disc-2.svg?v=be5ea8e1acb8461ec2cae2f4404774f1aa65da142b5df4eb3e65960111fdb2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
