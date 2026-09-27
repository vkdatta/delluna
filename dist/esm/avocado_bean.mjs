export const name="avocado_bean";
export const id="dl_6fe6910b1593bb1ff61c";
export const url=new URL("../icons/avocado_bean.svg?v=f4926896c3596e60206609c1fbad6d5cee999dd5722f9ec1a514c1c7c9129671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
