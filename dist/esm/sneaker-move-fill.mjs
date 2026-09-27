export const name="sneaker-move-fill";
export const id="dl_9bb84db69d89fbb74c46";
export const url=new URL("../icons/sneaker-move-fill.svg?v=351623568f66db34793da45a0f900d4ff2255b5263692497a92182251b299e61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
