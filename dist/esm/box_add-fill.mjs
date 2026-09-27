export const name="box_add-fill";
export const id="dl_720a2b415b912fddd069";
export const url=new URL("../icons/box_add-fill.svg?v=2d13205e733cdf56941c79b45b802888ff615bedace384355b087b2735106205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
