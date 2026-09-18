export const name="humerus_alt-fill";
export const id="dl_c0fc0c0feced4fd5955c";
export const url=new URL("../icons/humerus_alt-fill.svg?v=b377df7cbe188496be56c04c337235889051b95b75779ce1240a3b66060a4d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
