export const name="do_not_disturb_off-fill";
export const id="dl_6ed4131e5b8da53a9d94";
export const url=new URL("../icons/do_not_disturb_off-fill.svg?v=86e917de4af027d10915abe21be611e5a941f7a58e6dd0e8bc6320046a038e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
