export const name="developer_guide-fill";
export const id="dl_d4d8b1088ac0460206fa";
export const url=new URL("../icons/developer_guide-fill.svg?v=462a57711ebf1361baf1476784f7eac481ffa2c4158a185c3bf727e537059551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
