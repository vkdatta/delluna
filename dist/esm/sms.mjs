export const name="sms";
export const id="dl_049264652a273b58de77";
export const url=new URL("../icons/sms.svg?v=d638183fd81482860d67e03bd22569b71e013a97ad43154d1dedab323bd305bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
