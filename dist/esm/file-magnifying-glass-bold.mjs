export const name="file-magnifying-glass-bold";
export const id="dl_c65e129c5e0e48afac7d";
export const url=new URL("../icons/file-magnifying-glass-bold.svg?v=83e2b89946f2d06a8f42d9dc3b3f5ef5c1dfa042537813c041dac26c3d997eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
