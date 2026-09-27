export const name="shoppingmode";
export const id="dl_c19aad5d1aea848648b9";
export const url=new URL("../icons/shoppingmode.svg?v=f94e731e8cac0c71b5abd8e85f3d51923243e0609fba4b2fabf159eafc75f9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
