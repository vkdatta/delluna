export const name="shipping-container";
export const id="dl_b66f2dc046633a556c45";
export const url=new URL("../icons/shipping-container.svg?v=f71b7bd49e5aeb5a4aa1c8fa0eea2120303e27680715dd0f9f5051a38ecc0e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
