export const name="how_to_reg-fill";
export const id="dl_8d3167f04af346b481b2";
export const url=new URL("../icons/how_to_reg-fill.svg?v=f3f5328b5466d4dadc38d0b140c19b096dd4f23f405327b50ee9140f66a4e98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
