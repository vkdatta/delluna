export const name="resize_window-fill";
export const id="dl_7beeb0038b8535448f09";
export const url=new URL("../icons/resize_window-fill.svg?v=862dbaebf6c68ec11458748b9e04dce87b035404a399859d28d8b0a5373a95ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
