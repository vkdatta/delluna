export const name="lucid_3-move-up";
export const id="dl_97651828110d4c5a8285";
export const url=new URL("../icons/lucid_3-move-up.svg?v=4008eed21eba7fc9a41639c1e8b870ffe6018b56b25f7d4b998e6890a71bcaaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
