export const name="memory-duotone";
export const id="dl_38e1b6d7c7614ccfa655";
export const url=new URL("../icons/memory-duotone.svg?v=377a224b67530627924420743a1517b621be8b34c3596f2045dac5b16f3bf07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
