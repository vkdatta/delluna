export const name="left_panel_close-fill";
export const id="dl_29b8405235889687d24d";
export const url=new URL("../icons/left_panel_close-fill.svg?v=bc5baf1b86d7568551f10459f0a7c0128d7ac815da3fdfc39f9b407ccde8172f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
