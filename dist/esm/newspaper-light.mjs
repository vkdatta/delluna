export const name="newspaper-light";
export const id="dl_3488ee432ca248bf905a";
export const url=new URL("../icons/newspaper-light.svg?v=354e3ce6f40a9aad26b9186fdfa9db5c0be110d5bd6957b66a2c35f05079e54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
