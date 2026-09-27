export const name="lucid_2-ev-charger";
export const id="dl_a6981637765142d59d12";
export const url=new URL("../icons/lucid_2-ev-charger.svg?v=14d9793f9fc154de3bc325d69a0541613c1ce8d15b004b484b2089aa23a252f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
