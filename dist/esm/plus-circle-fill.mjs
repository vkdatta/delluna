export const name="plus-circle-fill";
export const id="dl_186973a718e0413e9526";
export const url=new URL("../icons/plus-circle-fill.svg?v=c9805d6b1f0fc6b2b2feba9976bcac19de5df79c25681d99cbac81e1c43e336a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
