export const name="spellcheck-fill";
export const id="dl_6feb999b3ac44d36a338";
export const url=new URL("../icons/S/spellcheck-fill.svg?v=9da70e7921b0f6f496d997029cbe81418d81f30cf4402d4737a6f6a03a5477cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
