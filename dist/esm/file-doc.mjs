export const name="file-doc";
export const id="dl_779bb313acd64f3eb2d6";
export const url=new URL("../icons/file-doc.svg?v=1b03849483c9bf4b99e8f2d033275285243cc6a5f15683cc102d36ad8117f959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
