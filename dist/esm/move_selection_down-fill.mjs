export const name="move_selection_down-fill";
export const id="dl_f9748285026e777f6ec0";
export const url=new URL("../icons/move_selection_down-fill.svg?v=1434a8bcec045c90c3c901676c6b2c4b73f775e9534787415ccb96ed3e138d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
