export const name="info-fill";
export const id="dl_29d29a860c0d4cebaab4";
export const url=new URL("../icons/info-fill.svg?v=8240b810f7a3b076271a829dff61c7dd64257a781c30f29c938f88835f11136a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
