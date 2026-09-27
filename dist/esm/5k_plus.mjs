export const name="5k_plus";
export const id="dl_ae693f15d074e53038dc";
export const url=new URL("../icons/5k_plus.svg?v=b4f1d5892d603d9b5e5cdbe474a31e45b2825508e4f6ac86d4b50c3243a81829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
