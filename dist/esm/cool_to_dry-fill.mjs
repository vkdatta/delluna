export const name="cool_to_dry-fill";
export const id="dl_f92edfbcb30c322b7f1a";
export const url=new URL("../icons/cool_to_dry-fill.svg?v=8561cee6aa89f0fe9049a9b07a4935c692745b824b998bc5bd327c208f14258b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
