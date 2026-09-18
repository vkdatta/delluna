export const name="wall_lamp";
export const id="dl_0f0c90e1dae94962bba3";
export const url=new URL("../icons/wall_lamp.svg?v=e8591e3c425f5eebf8a93f2db58f23d07cfd2495929a49ce8089a74969dfcade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
