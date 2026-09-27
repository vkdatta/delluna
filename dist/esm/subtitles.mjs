export const name="subtitles";
export const id="dl_3164c1ff83cfa9925704";
export const url=new URL("../icons/subtitles.svg?v=fe4528fe93784a4033d3d3e6c39447dbdef49d3d526f88682b04bb0bfdb79055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
