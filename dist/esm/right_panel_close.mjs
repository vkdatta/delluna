export const name="right_panel_close";
export const id="dl_617075431cf6a960d7fd";
export const url=new URL("../icons/right_panel_close.svg?v=6a2ac57dcd2ed77220b6f1b1ce38ed32afd901a583a6aa9dc144f332dffc85a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
