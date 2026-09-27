export const name="link-simple-horizontal";
export const id="dl_9bac7ecb6f434db2b90c";
export const url=new URL("../icons/link-simple-horizontal.svg?v=043b4f4b34132b3d965dd86d8012385f661410e6201e4d0da5ec026558247949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
