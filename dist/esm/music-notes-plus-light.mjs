export const name="music-notes-plus-light";
export const id="dl_301dceca14af4621b53f";
export const url=new URL("../icons/music-notes-plus-light.svg?v=a3c3247550089e5c378792aa6057a5e35f32794fc42b1afd82db3d84fab4dc9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
