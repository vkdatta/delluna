export const name="fluid";
export const id="dl_916e2fd06406cf22b631";
export const url=new URL("../icons/fluid.svg?v=4deb17584b66aa10183f5e3c95fcd7ad3b17ba236814e3a06f87be2cbc548d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
