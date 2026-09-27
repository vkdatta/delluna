export const name="bottom_panel_close";
export const id="dl_22bb0df4201914931500";
export const url=new URL("../icons/bottom_panel_close.svg?v=1a2fe6e0cf3631afe3dd8c8a8883a77452ef69c010585ca8aef0e3cb45409de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
