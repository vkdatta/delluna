export const name="check_alert-fill";
export const id="dl_e8a5cca1da444ccabeed";
export const url=new URL("../icons/C/check_alert-fill.svg?v=c94f80045289a2d424e1e6f03eb912b51972cd46c21b1f97ef7c25e10b936897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
