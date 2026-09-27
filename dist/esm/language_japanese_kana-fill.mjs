export const name="language_japanese_kana-fill";
export const id="dl_237aa4548529d8f7db0d";
export const url=new URL("../icons/language_japanese_kana-fill.svg?v=e4098167e49f8d04febec92dc30b64926909d48282bbd363a635751108f9a7ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
