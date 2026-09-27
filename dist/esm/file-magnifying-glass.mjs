export const name="file-magnifying-glass";
export const id="dl_061a5ec647824249a9d8";
export const url=new URL("../icons/file-magnifying-glass.svg?v=b8240441dd98bd75c79fb5b839427428f17d0c3f14027c9c5d3d275d8e076bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
