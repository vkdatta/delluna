export const name="shopping-cart-duotone";
export const id="dl_f09f67ce612227420ba1";
export const url=new URL("../icons/shopping-cart-duotone.svg?v=d5ba4a48ef9b5cbd4306aaf6f67b8f12689e95a424906b6e8b772a044f2f4395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
