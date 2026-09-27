export const name="dataset_linked-fill";
export const id="dl_3046da15a0d982fc81e6";
export const url=new URL("../icons/dataset_linked-fill.svg?v=425cc427974fd62df2ba56110ebca430238a790d9ad36b6d950b5419767efea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
