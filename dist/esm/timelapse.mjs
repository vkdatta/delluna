export const name="timelapse";
export const id="dl_427eb2cf180c4de3ec13";
export const url=new URL("../icons/timelapse.svg?v=2d91d2b11cd640a05d3acd88de97f037eb3d919931afef4e304ef366d319cd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
