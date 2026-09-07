export const name="sidebar-light";
export const id="dl_1049dd4668f645fda1bc";
export const url=new URL("../icons/S/sidebar-light.svg?v=b3bc859dfcbeb52b799dae6508d15ea19bf921b1e603828fcac47ea077553cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
