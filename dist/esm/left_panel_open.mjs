export const name="left_panel_open";
export const id="dl_651e0f1df10d8a67539c";
export const url=new URL("../icons/left_panel_open.svg?v=4500e25aeaeec61cc0cacf5fb9f3035f9fa9d067678ad97f7ae110cbc1cc138e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
