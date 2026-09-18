export const name="remove-fill";
export const id="dl_d32afa9b6ad94b3fa95d";
export const url=new URL("../icons/R/remove-fill.svg?v=020f53eae0315abe7d7d84d121c1d8d38e92fd1407302e6f1ae299024aa2d9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
