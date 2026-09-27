export const name="verified";
export const id="dl_8797f6ed92177715890f";
export const url=new URL("../icons/verified.svg?v=266888ed4bc3d0cb67c0ac8a4434b4b3620b55d833add121e1cd22489b16d18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
