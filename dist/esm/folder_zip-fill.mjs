export const name="folder_zip-fill";
export const id="dl_9130a90cbfdf4662b440";
export const url=new URL("../icons/folder_zip-fill.svg?v=916f5089bb40f4f5f1d2a88d822cb38691a72518c68c3198c667247957bc647b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
