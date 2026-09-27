export const name="exam-light";
export const id="dl_a0acbb0ef70049e99028";
export const url=new URL("../icons/exam-light.svg?v=9be2537f7ba8483a0ea9325d5356ddda7c723bd93d0f71cb84b0eaceb2305825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
