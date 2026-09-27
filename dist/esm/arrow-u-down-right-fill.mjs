export const name="arrow-u-down-right-fill";
export const id="dl_ea54f96907f645759758";
export const url=new URL("../icons/arrow-u-down-right-fill.svg?v=cb30bf950162ffc204996f08ad29faca5f790d11aa1283d0b5467362329a38e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
