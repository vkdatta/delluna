export const name="no_flash-fill";
export const id="dl_7eb19be72c16e3bc7202";
export const url=new URL("../icons/no_flash-fill.svg?v=a80a7f0d50ab6f7b7f63e6bc8634689c3ba26ce39d3ba58f0d130d946bceb2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
