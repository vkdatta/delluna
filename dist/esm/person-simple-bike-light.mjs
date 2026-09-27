export const name="person-simple-bike-light";
export const id="dl_d07c947077344dcda09c";
export const url=new URL("../icons/person-simple-bike-light.svg?v=effe4266704fff9d671c048270a316569de54bbc5cce12c028e2a3a427a9ecaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
