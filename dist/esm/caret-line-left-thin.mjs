export const name="caret-line-left-thin";
export const id="dl_aaf27e50688f44629b89";
export const url=new URL("../icons/caret-line-left-thin.svg?v=944bde957d682c29e9d0f410e140edcd487a87a649a6023f4be0386467c440c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
