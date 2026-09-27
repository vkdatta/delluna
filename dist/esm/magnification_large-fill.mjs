export const name="magnification_large-fill";
export const id="dl_03e5a6919b4cc5cc3358";
export const url=new URL("../icons/magnification_large-fill.svg?v=13eae7de51bc1d9f4545b284d60874c86cbff8207ac2f333744bb7f91a1b95ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
