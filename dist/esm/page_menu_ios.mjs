export const name="page_menu_ios";
export const id="dl_860c2790957e5c3b5007";
export const url=new URL("../icons/page_menu_ios.svg?v=cb46be26575791f5f83130ceb7ae81bb2899d13cbb20a4976d03eb5f0407ab88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
