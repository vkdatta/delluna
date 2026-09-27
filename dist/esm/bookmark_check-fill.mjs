export const name="bookmark_check-fill";
export const id="dl_61dfe4684de0fcb00fd3";
export const url=new URL("../icons/bookmark_check-fill.svg?v=2f627c53998ed14db54df8a8955d74b1fe06a8dcce5dd728282907ebcb014a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
