export const name="upcoming-fill";
export const id="dl_110a98c09b5a8561d1d5";
export const url=new URL("../icons/upcoming-fill.svg?v=f6097a070ba9fa77472bdc99fe63461d3e4c1f8643794e1cf2a5f2ff3df4ac66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
