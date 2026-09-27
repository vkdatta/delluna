export const name="cell-signal-low-thin";
export const id="dl_ea28989a1e774cc68643";
export const url=new URL("../icons/cell-signal-low-thin.svg?v=42cb41f6e6b5cd4323d333eb15f031005558023337d97658a990a25b04beb9a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
