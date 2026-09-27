export const name="lucid_3-sailboat";
export const id="dl_a7564e1b67d84cb6befc";
export const url=new URL("../icons/lucid_3-sailboat.svg?v=26bf1dcc621fb190b0bf51d64395b432c780642937db0434758b6f3d6ec18b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
