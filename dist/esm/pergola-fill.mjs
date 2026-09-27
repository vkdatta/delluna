export const name="pergola-fill";
export const id="dl_7ada0b83254716a10b68";
export const url=new URL("../icons/pergola-fill.svg?v=e943fb4765056561a497cad489b6e491b1bfff5a12d2424f82669bc77a2d23b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
