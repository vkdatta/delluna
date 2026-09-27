export const name="linked_services";
export const id="dl_a49b41652de3439def5f";
export const url=new URL("../icons/linked_services.svg?v=123e7c2e4eb3c11a6ebb91827e11206a6f0609f791333c71cf25def5096ecf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
