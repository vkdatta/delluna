export const name="center_focus_weak-fill";
export const id="dl_f818eb36ee624a06b842";
export const url=new URL("../icons/C/center_focus_weak-fill.svg?v=daa108cbbbfe983eb36cc03b0aa06229ccc2d2e963e1ec622b0df12c3388ad68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
