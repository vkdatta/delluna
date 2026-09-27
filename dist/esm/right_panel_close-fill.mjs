export const name="right_panel_close-fill";
export const id="dl_3b7716bd5d882d365ba7";
export const url=new URL("../icons/right_panel_close-fill.svg?v=d6ccf0bd5011f931ef5a84f7a1562edcc49e0bfb98b123ec88530a69d2e11f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
