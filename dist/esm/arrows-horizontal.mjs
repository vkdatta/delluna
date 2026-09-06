export const name="arrows-horizontal";
export const id="dl_da0b4df6f518446db7c6";
export const url=new URL("../icons/arrows-horizontal.svg?v=964d441543e0dc71ad40b234424fae92be4dea3e0eff7237dad53c50c88143b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
