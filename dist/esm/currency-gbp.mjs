export const name="currency-gbp";
export const id="dl_7d59306d48a742ea97b6";
export const url=new URL("../icons/currency-gbp.svg?v=dd3b8a52d9e0487ca3f4f84765e4dbb8544c888ae7e6188c269c6140fb765b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
