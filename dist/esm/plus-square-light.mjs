export const name="plus-square-light";
export const id="dl_d0470c474dba46b7b53a";
export const url=new URL("../icons/plus-square-light.svg?v=e45093553e57ed7e8a95381248f299a7275a0d2e391950f947d3d54807a5994b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
