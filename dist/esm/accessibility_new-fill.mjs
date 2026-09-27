export const name="accessibility_new-fill";
export const id="dl_3cb4ec838a7ad9214101";
export const url=new URL("../icons/accessibility_new-fill.svg?v=68b32442963c3a8ccc633aa86da806c0b46a890a09b80f30cd6f7fbc3a820819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
