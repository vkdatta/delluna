export const name="shelf_position-fill";
export const id="dl_41ff656d372064c16015";
export const url=new URL("../icons/shelf_position-fill.svg?v=b7b40b9cc2665e99a8661622187744b524c7ee40c95ef779ecd68388f1dd1b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
