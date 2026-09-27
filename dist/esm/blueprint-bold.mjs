export const name="blueprint-bold";
export const id="dl_72d3802c63194da193ce";
export const url=new URL("../icons/blueprint-bold.svg?v=1d7ecf3d5d57960a6fdae37ae2537dfbbbbe3c0abce30f104679f3cbf5693d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
