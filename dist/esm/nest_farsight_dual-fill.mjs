export const name="nest_farsight_dual-fill";
export const id="dl_965872a24e9139f9bbea";
export const url=new URL("../icons/nest_farsight_dual-fill.svg?v=222c67bdf9354ccb2665422fe6514e08938b27f1054208eabe2e413dd7bec90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
