export const name="move_selection_right-fill";
export const id="dl_2c98239f16fb72cec431";
export const url=new URL("../icons/move_selection_right-fill.svg?v=1e1a2bdafd7253cacc779c42ce60d506b4317453b3d8c9013cf9c2a37a52f211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
