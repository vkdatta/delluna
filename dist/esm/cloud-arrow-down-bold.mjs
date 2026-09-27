export const name="cloud-arrow-down-bold";
export const id="dl_bbea51765f1c4d43ac79";
export const url=new URL("../icons/cloud-arrow-down-bold.svg?v=d28360763dd33af47fcde57e9906b0d1ca6f06b2186dffd84a9b6b1202d5f6b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
