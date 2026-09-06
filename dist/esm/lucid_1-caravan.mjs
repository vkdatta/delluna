export const name="lucid_1-caravan";
export const id="dl_a53fe46f25ea4e6fb0df";
export const url=new URL("../icons/lucid_1-caravan.svg?v=c6cf13c755ccbcab58356b9cbc01d3214701da774024ab43c09b6251d1be1404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
