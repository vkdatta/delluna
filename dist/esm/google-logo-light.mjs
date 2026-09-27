export const name="google-logo-light";
export const id="dl_c2512e15d9554b45acc0";
export const url=new URL("../icons/google-logo-light.svg?v=9aa9fd2c3da224210194c8b65105ac4bdb89c12afe883645e87431acbc8490f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
