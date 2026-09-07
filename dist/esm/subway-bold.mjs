export const name="subway-bold";
export const id="dl_510fea56cb3d479fbbaf";
export const url=new URL("../icons/S/subway-bold.svg?v=a8bd911a9a111a623d41a4e88fa5c2599b637d51a9ff870c0dfb31bb0062e6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
