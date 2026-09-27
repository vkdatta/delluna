export const name="sliders-horizontal-duotone";
export const id="dl_6721d4461f4ffc638fbd";
export const url=new URL("../icons/sliders-horizontal-duotone.svg?v=6a81ba4f152123e3289e774db9f60b19435b295347d330ca67a745f02f7fb220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
