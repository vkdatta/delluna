export const name="monitor-arrow-up-fill";
export const id="dl_7ec92fec1dfa4a0a94fe";
export const url=new URL("../icons/monitor-arrow-up-fill.svg?v=d45b754061778fbd8dcf39508cb31ceacf038cb31558ec3184373127a1cc6c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
