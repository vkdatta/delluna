export const name="lucid_3-receipt-russian-ruble";
export const id="dl_b8d2f6ca10a74235b91a";
export const url=new URL("../icons/lucid_3-receipt-russian-ruble.svg?v=5e4e36682309c8d309aca308319f8eb74eb52dd581d5af59e42e10d465417503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
