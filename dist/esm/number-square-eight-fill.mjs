export const name="number-square-eight-fill";
export const id="dl_5985f729856449199643";
export const url=new URL("../icons/number-square-eight-fill.svg?v=16affe78f6cc815cec542e18d80b5f3e4d96b2976ac7a79e746c72a6bce29472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
