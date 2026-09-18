export const name="no_transfer-fill";
export const id="dl_bffdd82840754cc6ad33";
export const url=new URL("../icons/no_transfer-fill.svg?v=670969bb7018bbbf8c9b5ec48eb285fd526e74bc8b318bd5c92a071c5d9e0380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
