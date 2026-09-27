export const name="coin-duotone";
export const id="dl_d8a801688f1f4e458062";
export const url=new URL("../icons/coin-duotone.svg?v=d840b13463a977fd1f97110a04e0db9aa525ab5408fc8f859e7cc7eaeb5687b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
