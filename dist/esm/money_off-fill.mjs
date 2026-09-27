export const name="money_off-fill";
export const id="dl_ca3d4ebabb1756b0e494";
export const url=new URL("../icons/money_off-fill.svg?v=41b9e233a6d6931423ad2f1472bee9ae42b0c188f737a9deae0bef66bf2937e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
