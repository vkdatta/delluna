export const name="currency-btc";
export const id="dl_b4dfd2979d85444ea5e0";
export const url=new URL("../icons/currency-btc.svg?v=0066f73e535a8572743ff36ece949aedd90d027f098b66322a722f5aee3ae4c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
