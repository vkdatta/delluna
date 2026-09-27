export const name="captive_portal-fill";
export const id="dl_b32ba5ef0e71b343f85a";
export const url=new URL("../icons/captive_portal-fill.svg?v=40d51386e1b25fdde3c58086b5d4eca189ae3cf97e87df5444ac73dd688152e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
