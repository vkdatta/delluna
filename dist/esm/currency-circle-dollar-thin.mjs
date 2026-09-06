export const name="currency-circle-dollar-thin";
export const id="dl_7630be6ca39841cd9ee6";
export const url=new URL("../icons/currency-circle-dollar-thin.svg?v=57ee79bfbb7d10f9bb73f4908f9218afcb9afda607e863744938669c269d2042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
