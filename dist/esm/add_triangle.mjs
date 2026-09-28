export const name="add_triangle";
export const id="dl_8cf26fa24a4f75ac8e21";
export const url=new URL("../icons/add_triangle.svg?v=130ab79b13837a69c667353e964131bb9ca4cb782b74f26eade21757dc72a4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
