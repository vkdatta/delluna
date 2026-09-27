export const name="hand-duotone";
export const id="dl_7caadbb0af0846838910";
export const url=new URL("../icons/hand-duotone.svg?v=43b809b8eb4c4eea6ca90f5aee1541742f38b08f97f320cb0803dd6b4617c13b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
