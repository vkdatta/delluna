export const name="select_window_off-fill";
export const id="dl_7e74a959a7cadbdfaf97";
export const url=new URL("../icons/select_window_off-fill.svg?v=3e2ce007ef0535ab6ef3c402290b012a2b0b4761fe6dd49aa8362ebcd4ca8ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
