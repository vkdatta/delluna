export const name="receipt-x-light";
export const id="dl_6f2b1d87c42f44518fb7";
export const url=new URL("../icons/receipt-x-light.svg?v=a0c1a0f9b7004cc8d12b155c313afd73e0d0cea325c087dce53fea2264f47109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
