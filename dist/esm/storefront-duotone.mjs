export const name="storefront-duotone";
export const id="dl_8432e4b84fe81884cd00";
export const url=new URL("../icons/storefront-duotone.svg?v=49f48216b41421e9869363ba76b6edfa707e968503bf614eafae94d03787a4c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
