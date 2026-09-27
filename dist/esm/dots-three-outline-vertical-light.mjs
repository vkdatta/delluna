export const name="dots-three-outline-vertical-light";
export const id="dl_47477a2409eb41c58957";
export const url=new URL("../icons/dots-three-outline-vertical-light.svg?v=2a3dc17ee794fa49aaf42111e843fc46e5be376fd86c53a2c1212f84909a1e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
