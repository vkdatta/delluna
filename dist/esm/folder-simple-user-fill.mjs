export const name="folder-simple-user-fill";
export const id="dl_c976d4f57e554f9e9b62";
export const url=new URL("../icons/folder-simple-user-fill.svg?v=ed912bfac5034a40a496a135e9cbb71c9393762ac6bcf348ee68c826bdac5750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
