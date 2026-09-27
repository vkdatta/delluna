export const name="file-archive-light";
export const id="dl_e1f0c2eef1a54eefbcf0";
export const url=new URL("../icons/file-archive-light.svg?v=be9454e7743217623e6768a6bb626af379aff078a637a8b479e7af2712d6bdfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
