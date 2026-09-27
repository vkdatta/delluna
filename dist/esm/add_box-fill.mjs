export const name="add_box-fill";
export const id="dl_ddcc0b42026b9b0d2268";
export const url=new URL("../icons/add_box-fill.svg?v=dc1dbafa3912b5c376ed4554f79801ab5ca96a092aa7057817643f5188290f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
