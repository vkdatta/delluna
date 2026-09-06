export const name="lamp-pendant-duotone";
export const id="dl_d6eb34cfca1241b7ab10";
export const url=new URL("../icons/lamp-pendant-duotone.svg?v=68a4e8cb9c2de58143f49a283ccdd189798d1f2c913b43109c092fcb6c7d5241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
