export const name="ink_highlighter_off-fill";
export const id="dl_77ef9783a53c4c377769";
export const url=new URL("../icons/ink_highlighter_off-fill.svg?v=7b34c8c34d25935bf53b958f1866294e68993d8f8bf20f4e741ec6e2ebbeca73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
