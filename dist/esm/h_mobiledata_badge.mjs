export const name="h_mobiledata_badge";
export const id="dl_53189cd132d7453c9e0c";
export const url=new URL("../icons/h_mobiledata_badge.svg?v=cf20f99a923da862a1affa8499715fae7990ded382146b086f44cddb94ec7f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
