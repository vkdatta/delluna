export const name="lucid_1-banknote-arrow-up";
export const id="dl_0b02d99570dd48a39a7e";
export const url=new URL("../icons/lucid_1-banknote-arrow-up.svg?v=e28d08ec896a85fd678a38e96702038305fe778740a46db6b31ec2fdcbce096e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
