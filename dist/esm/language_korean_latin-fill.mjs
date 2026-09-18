export const name="language_korean_latin-fill";
export const id="dl_408a2ff8f1c540a98448";
export const url=new URL("../icons/language_korean_latin-fill.svg?v=df35aa63d5f47e680ed756d622761d4e8d43521acc0b3b083af80214bf748e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
