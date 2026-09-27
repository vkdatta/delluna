export const name="cube-fill";
export const id="dl_96ef6690b0844e0e8432";
export const url=new URL("../icons/cube-fill.svg?v=6e10f1cdf59506260bc1f89322ec0f8640ddd85a3543838c0d543072d855b410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
