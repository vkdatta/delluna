export const name="letter-circle-p-duotone";
export const id="dl_f45ee645bfa24e919caf";
export const url=new URL("../icons/letter-circle-p-duotone.svg?v=fb1ac591b86b6a9b2bcec72403ea479c8c121ec01327407c2b8947a9d90042ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
