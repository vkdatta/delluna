export const name="laptop_mac-fill";
export const id="dl_9462953f459dd8af2321";
export const url=new URL("../icons/laptop_mac-fill.svg?v=542afc6b54cc90c0dcad25da7133e1c94a07fc721794228dabd61553ad87d8ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
