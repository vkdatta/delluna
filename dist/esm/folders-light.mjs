export const name="folders-light";
export const id="dl_0dcbe10a07d14359b382";
export const url=new URL("../icons/folders-light.svg?v=78f8a4c012bbb9425db6fa6da5a9590508c0cdeb4cc08558865d20e5dc3a8139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
