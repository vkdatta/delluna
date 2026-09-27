export const name="wave-triangle";
export const id="dl_a9c0367bf63d957949e2";
export const url=new URL("../icons/wave-triangle.svg?v=edb5adea877f938a6940a32f57a142746bb535fa2a7274694a2be69c325f6526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
