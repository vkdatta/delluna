export const name="fast_rewind-fill";
export const id="dl_6a4e7531e672d1a42b09";
export const url=new URL("../icons/fast_rewind-fill.svg?v=dc1d63f90659904b396cd3aaf2bb28c457dbfb822c6fda7a1b2da4fe54bc9a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
