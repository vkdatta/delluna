export const name="routine-fill";
export const id="dl_287eb641d5c6362d819f";
export const url=new URL("../icons/routine-fill.svg?v=7cbb3de8aad13d8369be24cfbcbd4b8fa34f61f135f3f9b6339bf7e1788d10f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
