export const name="lift_to_talk-fill";
export const id="dl_db456fdb23504e27a501";
export const url=new URL("../icons/L/lift_to_talk-fill.svg?v=b3f23e68a8daff6c52d56334a3fb6a884b909c7a8cf46bfa5f9155da0bb94857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
