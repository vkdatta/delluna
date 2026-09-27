export const name="weight-fill";
export const id="dl_572c7998683854b811aa";
export const url=new URL("../icons/weight-fill.svg?v=f7707ae893a5aae3077f1b35af8e2ed5fe264d2758f77e928181c3fa96598745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
