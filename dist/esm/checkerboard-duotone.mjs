export const name="checkerboard-duotone";
export const id="dl_0db7d1788fc747a8ab72";
export const url=new URL("../icons/checkerboard-duotone.svg?v=9cbd613de60a75bc13dcb6844594a5c83f76fed979d7d9a12a4840db6647b932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
