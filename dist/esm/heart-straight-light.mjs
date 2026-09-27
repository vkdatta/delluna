export const name="heart-straight-light";
export const id="dl_c58feda2ddec4708af95";
export const url=new URL("../icons/heart-straight-light.svg?v=78aae73371b00c55ee10b44ca69e74ba348e2d9549c8fed566137e73dd58eab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
