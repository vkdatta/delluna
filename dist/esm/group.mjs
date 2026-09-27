export const name="group";
export const id="dl_0a45d2269eb95a534d89";
export const url=new URL("../icons/group.svg?v=6da092a90569cf24266044e70eb19082dfa1f24a97438958704762c8baac9e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
