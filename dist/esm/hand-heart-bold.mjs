export const name="hand-heart-bold";
export const id="dl_640f127094c54f1b8705";
export const url=new URL("../icons/hand-heart-bold.svg?v=71a9262401d67daebb3b7ced8412347ff808cdb57cfea898d4898a1301e168d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
