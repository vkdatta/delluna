export const name="chalkboard-teacher-duotone";
export const id="dl_8f00dfa3bf09462796bc";
export const url=new URL("../icons/chalkboard-teacher-duotone.svg?v=12789d97a4085f3d19662b91354e9d9f6264a7091e953ac86c17d926a6dee0b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
