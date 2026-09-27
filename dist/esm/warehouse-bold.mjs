export const name="warehouse-bold";
export const id="dl_3da7a52c09757c6407f2";
export const url=new URL("../icons/warehouse-bold.svg?v=1e764e3451c4802554a777d70b11900fd32c5d87a0b0ab738014f96477e3528d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
