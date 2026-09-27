export const name="mobiledata_arrows-fill";
export const id="dl_6c59c2f4957b79c9ba32";
export const url=new URL("../icons/mobiledata_arrows-fill.svg?v=99d83200808daab1e250328194dd040f3318938978cd6510a84939e2c22acaab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
