export const name="right_panel_open";
export const id="dl_469ed9e5f4ec10eed3a1";
export const url=new URL("../icons/right_panel_open.svg?v=7f70548970c960dfcc8abebb6320f8ed8c6d6329ec7a8899f3f35c89fa699079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
