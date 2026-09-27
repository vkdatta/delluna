export const name="currency-inr-light";
export const id="dl_7134a856286143f79f7f";
export const url=new URL("../icons/currency-inr-light.svg?v=1adb3caff5324f5b668e305bddb08ce6b843f461bc72351e524996bc0b19f819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
