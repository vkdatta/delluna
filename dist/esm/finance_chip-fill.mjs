export const name="finance_chip-fill";
export const id="dl_550a8d65433a444c8d0c";
export const url=new URL("../icons/finance_chip-fill.svg?v=49d823f7293d790bd7bb94e67fe932af1dd2b0afd832d4a5369c88ca3be4a875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
