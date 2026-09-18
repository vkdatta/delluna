export const name="square_foot-fill";
export const id="dl_b229fb025bc348a18e71";
export const url=new URL("../icons/square_foot-fill.svg?v=353a1240d0bef1c00a3c7b8f4e75e7642a4b981067af0e670afcfa7ca5691407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
