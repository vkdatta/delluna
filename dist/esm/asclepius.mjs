export const name="asclepius";
export const id="dl_202ef54eab3440779d21";
export const url=new URL("../icons/asclepius.svg?v=2d853ac249e3eae4f01278d0400da121f2c9e19c6d7b6d47cf972839ba51337b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
