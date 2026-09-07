export const name="skull-duotone";
export const id="dl_6356c6afa8364d0b970b";
export const url=new URL("../icons/S/skull-duotone.svg?v=7bc1680496a8815dabef9ad3e7ec24f0668c91ad861b5303403322457e0268f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
