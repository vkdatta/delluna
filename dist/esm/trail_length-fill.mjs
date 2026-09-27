export const name="trail_length-fill";
export const id="dl_aa5af2a2b59258770c83";
export const url=new URL("../icons/trail_length-fill.svg?v=4175b945abdeceb1925d29035b199e95dc24f54d1a7d29290be85cbf742b6802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
