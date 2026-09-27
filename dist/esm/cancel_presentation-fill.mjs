export const name="cancel_presentation-fill";
export const id="dl_85b089acbc5c9d33c74a";
export const url=new URL("../icons/cancel_presentation-fill.svg?v=be215954b1b84295e61a67a74cab555b85d834eee0b1b71bb662046767ba054a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
