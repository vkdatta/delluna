export const name="fit_screen-fill";
export const id="dl_2b24fc9a44a9b833a816";
export const url=new URL("../icons/fit_screen-fill.svg?v=a6661e79e17deaa3deac7bbe3a305d0760836f1bd50ce9024fb38c75730eff65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
