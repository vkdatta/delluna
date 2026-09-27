export const name="lucid_3-ribbon";
export const id="dl_3b3f3d22b4f64529b3dd";
export const url=new URL("../icons/lucid_3-ribbon.svg?v=ef7ca8d451a78ad42dbf9835228c07d7cf741fdb853313c9242410bacbf0f8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
