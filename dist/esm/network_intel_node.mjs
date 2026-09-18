export const name="network_intel_node";
export const id="dl_5af56664faae47e1ae99";
export const url=new URL("../icons/network_intel_node.svg?v=37aebb8e9af83714e7b9d1bcce566230fd0bb3359204f90942224c29de35e663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
