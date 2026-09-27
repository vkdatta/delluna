export const name="currency-kzt-bold";
export const id="dl_7537968a62314beeac19";
export const url=new URL("../icons/currency-kzt-bold.svg?v=5ad2fa2ea0d9b9939880960b02df4a1d48142688690c77218081ba885e452e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
