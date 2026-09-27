export const name="paint-roller-light";
export const id="dl_67d35997b16741d6b4ff";
export const url=new URL("../icons/paint-roller-light.svg?v=7a62e0cd88ee8655db9ab14d3161e82c2986ef850aa32548320c69590e10ced7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
