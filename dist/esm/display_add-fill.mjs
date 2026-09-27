export const name="display_add-fill";
export const id="dl_8db771526f6676e3423b";
export const url=new URL("../icons/display_add-fill.svg?v=911d81c15373ace78bdeb8c957ff1245818994142dd4b0e0aa3dfdeb7e4686c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
