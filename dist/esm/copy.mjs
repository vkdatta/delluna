export const name="copy";
export const id="dl_77480153d3db17f90317";
export const url=new URL("../icons/copy.svg?v=3d44334b75f66834927421dbcdc98e8bc8b3d5aaf350e6bd0f64bb3156cbd230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
