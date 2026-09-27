export const name="vrpano";
export const id="dl_a942edf754e7b3d74b09";
export const url=new URL("../icons/vrpano.svg?v=b0323c1d188a07c876053f6588d65e991c060ce4fcb8270492a67be913d27733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
