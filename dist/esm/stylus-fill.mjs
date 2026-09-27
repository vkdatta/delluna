export const name="stylus-fill";
export const id="dl_a60dc55c4a7330e41532";
export const url=new URL("../icons/stylus-fill.svg?v=7aae90d794420bc1e6aa3b52ed46c4ee3e0be683d4b8edfedf8e57ffd8a715bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
