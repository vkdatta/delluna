export const name="chalkboard-teacher-duotone";
export const id="dl_8f00dfa3bf09462796bc";
export const url=new URL("../icons/chalkboard-teacher-duotone.svg?v=ec93e29be713c98465a4e3ad1c9def799f353bcea0609bdccce39f6caa7897bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
