export const name="play-circle-bold";
export const id="dl_d973819eb96541028341";
export const url=new URL("../icons/play-circle-bold.svg?v=0a997e6a9a0464585102083c5466cc1e36d5cb147af74f20218e8fb2d9cfdc28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
