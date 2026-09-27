export const name="lightning_stand-fill";
export const id="dl_abc72a4fabceaea4a3d9";
export const url=new URL("../icons/lightning_stand-fill.svg?v=b09bef77477e340bef31b9e61075ca5c1e71560cefd35af27b1d39c43e0a289a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
