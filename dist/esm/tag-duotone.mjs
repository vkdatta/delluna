export const name="tag-duotone";
export const id="dl_61e1d5a266a9a645a0f6";
export const url=new URL("../icons/tag-duotone.svg?v=3d1ab8dc9cfa0312164221673d279aaf408e1981085e6ed3bc381b9b541d4754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
