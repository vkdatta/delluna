export const name="television-simple-thin";
export const id="dl_baf9527ac2a58878bb2d";
export const url=new URL("../icons/television-simple-thin.svg?v=1eeb3000c023e34b529b0e5c07b36d3f2d3417388f0813e948e9a55c8d30e525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
