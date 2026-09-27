export const name="rule_settings-fill";
export const id="dl_db878a6b2a835b12f92d";
export const url=new URL("../icons/rule_settings-fill.svg?v=6e538cbb5c8057649e131d1f1358846a8f6d6677b77456b22b1681fa32fd666d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
