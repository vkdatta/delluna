export const name="earbuds";
export const id="dl_d82fa1d990c5a687a901";
export const url=new URL("../icons/earbuds.svg?v=b783c269ab6f41bab4e9544affa80b4a414f6dbd4d0e7d0ef478ab761220e695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
