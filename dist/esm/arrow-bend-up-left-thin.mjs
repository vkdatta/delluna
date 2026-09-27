export const name="arrow-bend-up-left-thin";
export const id="dl_44a183f7c44b4121b24c";
export const url=new URL("../icons/arrow-bend-up-left-thin.svg?v=2db56a45e3f776edf57ef156a69410c7ada52ccc84afa9b704c300e2963f1cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
