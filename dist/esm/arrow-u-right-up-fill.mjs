export const name="arrow-u-right-up-fill";
export const id="dl_2418d4fbb98247efa41b";
export const url=new URL("../icons/arrow-u-right-up-fill.svg?v=338d103d863b0c954a32600ad6c58eb730d7b3e50fc8527fea4f3aac7e41da0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
