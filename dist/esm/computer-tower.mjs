export const name="computer-tower";
export const id="dl_722f9c11227f4ddd9604";
export const url=new URL("../icons/computer-tower.svg?v=ecf5d3d40d3b40503f088b2a6e3088cbd8e460c19e32d26744a3c5f18732e6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
