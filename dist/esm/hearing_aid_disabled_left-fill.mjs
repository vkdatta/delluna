export const name="hearing_aid_disabled_left-fill";
export const id="dl_c5f07477428a6eb89055";
export const url=new URL("../icons/hearing_aid_disabled_left-fill.svg?v=0a00495ee0aa171e38eede9be691cc734d989b5da658d2f1405857cb7ef37578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
