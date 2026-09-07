export const name="smiley-nervous-fill";
export const id="dl_34206b86ddbc49088bfe";
export const url=new URL("../icons/S/smiley-nervous-fill.svg?v=ebe976ea698a085e7d1fe421ddb084e75e772fd5d66441b955c008399bcf0142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
