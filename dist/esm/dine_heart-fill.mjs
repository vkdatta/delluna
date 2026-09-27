export const name="dine_heart-fill";
export const id="dl_689dca55454caaeb059d";
export const url=new URL("../icons/dine_heart-fill.svg?v=ad67dba2846f6dc142250ea77b73639fb717134105db10600278e7aa0768afb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
