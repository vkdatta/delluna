export const name="paint-brush-household-bold";
export const id="dl_367aed30cb2f464ebbd5";
export const url=new URL("../icons/paint-brush-household-bold.svg?v=021bb862ed76f4bee791944347ea4b7fcba5c32e8d341b39846eceabced548e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
