export const name="arrow-down-right-duotone";
export const id="dl_2f1dfcbef49f47f8bcb9";
export const url=new URL("../icons/arrow-down-right-duotone.svg?v=0b83273a396745208448a4a547aa823f809957081c313ca9db11472e36b8f2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
