export const name="right_panel_close-fill";
export const id="dl_f696ba8d1ebf350388e1";
export const url=new URL("../icons/right_panel_close-fill.svg?v=8d241dc18a39e3378c30b395a3a3baed73f425a286cb0ab3e959106e23c907e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
