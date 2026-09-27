export const name="photo_prints-fill";
export const id="dl_94c82faa7af2e8b67824";
export const url=new URL("../icons/photo_prints-fill.svg?v=098277e73b243d21a6cabb2de9835d3a13281efe8949baaaea6df8128dacfd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
