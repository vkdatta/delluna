export const name="drag_pan";
export const id="dl_aff628053bed4465682c";
export const url=new URL("../icons/drag_pan.svg?v=cfaf8269e5d458ea14ad6aefe19e5fa805d5f286f19e979e7b9f04d53ff9d570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
