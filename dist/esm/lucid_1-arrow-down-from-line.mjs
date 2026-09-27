export const name="lucid_1-arrow-down-from-line";
export const id="dl_0a1d92bb097948eea3b9";
export const url=new URL("../icons/lucid_1-arrow-down-from-line.svg?v=d1717a0b523fe278520ec8acd96a7adf9842522194f604561a25aeb8dce8835d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
