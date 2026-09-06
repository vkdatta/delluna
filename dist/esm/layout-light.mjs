export const name="layout-light";
export const id="dl_968aea07aba942d99850";
export const url=new URL("../icons/layout-light.svg?v=9915faa711237b29f3b7a0012ca1a53beb57f928df6bda9a50b383fa042f96db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
