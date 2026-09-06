export const name="lucid_1-atom";
export const id="dl_0562759199084659ad49";
export const url=new URL("../icons/lucid_1-atom.svg?v=0ecc59d81f7989a9777540bd8ff83a42fc6d84b880bdb0f1c7299ce670ca8f2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
