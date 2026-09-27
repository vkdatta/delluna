export const name="radio-button-light";
export const id="dl_60243e86d573499a9b36";
export const url=new URL("../icons/radio-button-light.svg?v=bb7c6be8db274b637031a0d491f1af3b7a9ac0490aeb1c4de159cb222f49698e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
