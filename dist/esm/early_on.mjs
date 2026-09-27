export const name="early_on";
export const id="dl_644ea6af82b4d5f27e9a";
export const url=new URL("../icons/early_on.svg?v=631210b32df0e44b2feff906d4dd6a821d477d5fee5944731794ab675f760e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
