export const name="right_panel_open-fill";
export const id="dl_08c723efad4d51eae2f7";
export const url=new URL("../icons/right_panel_open-fill.svg?v=cd23b2c21225b7571abf772f41ac2325511ff4fda2db7717adebaa6fe726f776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
