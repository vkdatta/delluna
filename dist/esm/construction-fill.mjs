export const name="construction-fill";
export const id="dl_e7fedc456e2ef9c5634b";
export const url=new URL("../icons/construction-fill.svg?v=daac5f6c6869a2b4f6717c10191364f62b5454fbe8f69cd51211a0ce15c82732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
