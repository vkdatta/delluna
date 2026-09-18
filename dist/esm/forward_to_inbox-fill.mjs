export const name="forward_to_inbox-fill";
export const id="dl_5f5009858cee4563b165";
export const url=new URL("../icons/forward_to_inbox-fill.svg?v=4c27f377bfbe09eb10bd2e9065beda1eb38165f448a3b68288bd8a977a417d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
