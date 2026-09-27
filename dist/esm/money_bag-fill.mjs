export const name="money_bag-fill";
export const id="dl_f103238f54e6d17ad185";
export const url=new URL("../icons/money_bag-fill.svg?v=7f4c830cba619461a46fe040bd6edb0d9213040bac47219d1a9fb78e66b515a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
