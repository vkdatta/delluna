export const name="usb_off-fill";
export const id="dl_34fceea7fd65dff16008";
export const url=new URL("../icons/usb_off-fill.svg?v=1bfc0e6b5fe761b1edabc0a9144cce1835c7b2c2e659ff4f57e39a1e0dd4b3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
