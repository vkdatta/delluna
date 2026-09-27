export const name="money-light";
export const id="dl_e87b90a1fffd4d248949";
export const url=new URL("../icons/money-light.svg?v=138d15c424a84eb1933e0487b5b92513eda478e75b052a74c412ae837b11cc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
