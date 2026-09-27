export const name="caret-up-down-light";
export const id="dl_800bf3cc4de849978d13";
export const url=new URL("../icons/caret-up-down-light.svg?v=f736123e68104467cc75b4acfe10a645e0c73c5a3680908c0efa531d8bd9d390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
