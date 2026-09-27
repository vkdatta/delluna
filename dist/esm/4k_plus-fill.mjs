export const name="4k_plus-fill";
export const id="dl_8e4fb1ae5a8662cf3399";
export const url=new URL("../icons/4k_plus-fill.svg?v=b126d5dcf6527e804b809d1ad1841d6a2dc8d974fa80e1604a9bae335f798f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
