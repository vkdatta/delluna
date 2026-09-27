export const name="superset-proper-of";
export const id="dl_b0f536625b50d97bc94a";
export const url=new URL("../icons/superset-proper-of.svg?v=e189c9514057bc08252e5cef72450e2e6dc63796fa9da3baff6eb656ff8069e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
