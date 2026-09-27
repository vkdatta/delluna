export const name="list-magnifying-glass-duotone";
export const id="dl_50e938e866e84ca7b19a";
export const url=new URL("../icons/list-magnifying-glass-duotone.svg?v=de96844dd33afe4025de4f5c8259cf5a20cb0f3835f806f3e0770be2f02bad51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
