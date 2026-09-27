export const name="square-split-horizontal-fill";
export const id="dl_9a2f4b393ad3aeea8bfe";
export const url=new URL("../icons/square-split-horizontal-fill.svg?v=cf40260b48159eda091a38686a103ffd5941523589b92d12fd7e778cd9dce013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
