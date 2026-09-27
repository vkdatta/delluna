export const name="mobile_dots-fill";
export const id="dl_062f686971bc823434c1";
export const url=new URL("../icons/mobile_dots-fill.svg?v=2fff93572dd2b20b4aad79f5265ebde4bd2521ec0ba75015db959f96d28850a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
