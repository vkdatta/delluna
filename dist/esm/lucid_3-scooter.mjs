export const name="lucid_3-scooter";
export const id="dl_9d362a84219f401fab13";
export const url=new URL("../icons/lucid_3-scooter.svg?v=17ca9f42e89597e83d80935ef9a55581ca8d7b00b8ba7b3ac0d428a8901f913b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
