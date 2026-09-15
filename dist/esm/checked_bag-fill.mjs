export const name="checked_bag-fill";
export const id="dl_34353bde83c746b6acff";
export const url=new URL("../icons/C/checked_bag-fill.svg?v=68996c3c919afb5f2f9937f5538620c7851284b68333d33b85094581bfcfba5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
