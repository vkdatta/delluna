export const name="11mp";
export const id="dl_6ac57c82054f4c529a3f";
export const url=new URL("../icons/1/11mp.svg?v=a52a10ffcce8313ee5df5a7cb2d1b93556af1a689ae1c9ede16a4c7dc1d49878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
