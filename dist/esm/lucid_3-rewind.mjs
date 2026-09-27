export const name="lucid_3-rewind";
export const id="dl_64836b39f2124ed2b9a8";
export const url=new URL("../icons/lucid_3-rewind.svg?v=5f928c1df9b081780f3a7d9f81d4854684714ea3dcfd5d9905be012727cd15d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
