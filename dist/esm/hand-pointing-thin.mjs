export const name="hand-pointing-thin";
export const id="dl_f94522bd94d94f95a106";
export const url=new URL("../icons/hand-pointing-thin.svg?v=7fee85f3a6a783905d91387f1275af5f2b520e13862ebacb8a137d81586147dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
