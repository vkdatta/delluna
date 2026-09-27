export const name="lucid_3-square-arrow-out-up-left";
export const id="dl_98205c7b82044495b083";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-left.svg?v=56a28dd1037521ae4a89bcf54672191f17adc112984f89c31b11ecef71d13f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
