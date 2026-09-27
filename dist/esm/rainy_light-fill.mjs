export const name="rainy_light-fill";
export const id="dl_fe5aea1497536e0f774c";
export const url=new URL("../icons/rainy_light-fill.svg?v=579716d21a8399c069cfabb82587bfed53ebae220917b337256259762ab6af9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
