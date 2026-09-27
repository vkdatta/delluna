export const name="format_paint_off-fill";
export const id="dl_9bab75059a1988683d00";
export const url=new URL("../icons/format_paint_off-fill.svg?v=a6493cfaf74766bc7bc25dcc4fbc9a84da78e4f8aba324420177261ff97603e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
