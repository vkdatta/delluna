export const name="view_cozy-fill";
export const id="dl_b9fdcf941c8d2f96793c";
export const url=new URL("../icons/view_cozy-fill.svg?v=3a67189b47bdbf3e50e67fdc9b292342d874cfb6c678bed12252d7b5f1032964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
