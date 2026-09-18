export const name="restore_from_trash-fill";
export const id="dl_7d5a29de57b84c808ef6";
export const url=new URL("../icons/restore_from_trash-fill.svg?v=070ece31e07aa808c90c513b2c4fd506fe3948846256359aff825ce00b734db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
