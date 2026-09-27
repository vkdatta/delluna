export const name="subdirectory_arrow_left-fill";
export const id="dl_c8776694f89569ff7603";
export const url=new URL("../icons/subdirectory_arrow_left-fill.svg?v=d1659e606fd51368594b5ba33c9962d984d93a44852196978e2f3079548c3d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
