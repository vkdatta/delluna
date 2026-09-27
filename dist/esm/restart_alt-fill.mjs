export const name="restart_alt-fill";
export const id="dl_25d29d25fb332a5dec73";
export const url=new URL("../icons/restart_alt-fill.svg?v=76f36add9bc077b19d6de3129385ce142b3b9b534a38c223b4233e3e129b3f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
