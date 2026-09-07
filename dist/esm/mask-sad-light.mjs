export const name="mask-sad-light";
export const id="dl_edfcc3d7460e438fa6bb";
export const url=new URL("../icons/mask-sad-light.svg?v=10e747fa31b22db2c5f7ca469c0f1ea1c3d3f7ba2c2fbcd5e6597d93ec376f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
