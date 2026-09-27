export const name="usb-fill";
export const id="dl_133dc5bb807d44f37f79";
export const url=new URL("../icons/usb-fill.svg?v=5b4336db7165af4f0196a7efd39016c897a32321078526ebb32589dd8bfe683e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
