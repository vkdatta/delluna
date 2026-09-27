export const name="pen";
export const id="dl_f0252156612f411badd1";
export const url=new URL("../icons/pen.svg?v=212d50bc96bf16f30799c7bba537c85dac732bf5d35cd34c85bcfd1157852947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
