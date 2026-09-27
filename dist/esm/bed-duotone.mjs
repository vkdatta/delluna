export const name="bed-duotone";
export const id="dl_26d0b4f6ebc04a868725";
export const url=new URL("../icons/bed-duotone.svg?v=e7ad1bfc10b2ca4327435b5cc316fdeefd5731ceea48dacfca4e49637b24a1e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
