export const name="hearing_aid_disabled_left-fill";
export const id="dl_a8965f07cccc69259190";
export const url=new URL("../icons/hearing_aid_disabled_left-fill.svg?v=c035101691539a4a269c25f1fea66b342c1bff569cb115526d750e6e629c5e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
