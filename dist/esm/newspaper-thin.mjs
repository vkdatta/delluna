export const name="newspaper-thin";
export const id="dl_226f231023a448daa575";
export const url=new URL("../icons/newspaper-thin.svg?v=f94b21a3a570c11a8ecf2e7db39a8a3d813b8043410ba6ebc3703ab49c71c70a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
