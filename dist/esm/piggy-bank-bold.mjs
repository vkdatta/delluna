export const name="piggy-bank-bold";
export const id="dl_00ce51898a91468eb824";
export const url=new URL("../icons/piggy-bank-bold.svg?v=e626fafa7463e3c1c8e9adfff33f1964ce1353b3b1e8a89769226cc26a1cd30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
