export const name="change_circle-fill";
export const id="dl_48c4bd38b974d25f4cdc";
export const url=new URL("../icons/change_circle-fill.svg?v=1af161546e965d96fe01f5421a374615ac55ce35894a53a3a348ba04311febdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
