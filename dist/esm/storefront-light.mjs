export const name="storefront-light";
export const id="dl_d8567b54cd9f422580a0";
export const url=new URL("../icons/S/storefront-light.svg?v=e0e2902ec9affef55867b2fb0a473554771fe27371cfe4495d3e56a764d1bf32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
