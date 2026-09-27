export const name="outbox_alt-fill";
export const id="dl_46e651e804114d197f3c";
export const url=new URL("../icons/outbox_alt-fill.svg?v=e49f69e4675772309a70b35e1f31dc3c872d7ad3c3ff690afab1337c000ed400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
