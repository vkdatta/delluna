export const name="wifi_protected_setup-fill";
export const id="dl_71493489b4f8fcf517fd";
export const url=new URL("../icons/wifi_protected_setup-fill.svg?v=223038518329b257c8693106322b447224b7fd8220a0363472c628338136d0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
