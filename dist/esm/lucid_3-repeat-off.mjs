export const name="lucid_3-repeat-off";
export const id="dl_9b8040742aef4a5c8591";
export const url=new URL("../icons/lucid_3-repeat-off.svg?v=f437389fc53922bffc7f2f3ef15dd0fb3027bebdd714ee8f81042bc89f8a7f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
