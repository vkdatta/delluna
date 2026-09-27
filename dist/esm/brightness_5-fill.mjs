export const name="brightness_5-fill";
export const id="dl_9e8ef0860ea262d33b4c";
export const url=new URL("../icons/brightness_5-fill.svg?v=859c748083195c00b84dadfe9915ea5bbeedc12cc7256a5f5e693e054a85b2e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
