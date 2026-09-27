export const name="lucid_1-barcode";
export const id="dl_71a900af60a44eacbfa9";
export const url=new URL("../icons/lucid_1-barcode.svg?v=0cb68a8998f4d70a85fef7ed03c747b4c585174390520d1ffab1490189c878c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
