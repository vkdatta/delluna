export const name="finance_mode-fill";
export const id="dl_6cfc8b575ba55f865d8c";
export const url=new URL("../icons/finance_mode-fill.svg?v=50adc15464676123a6ee075627b953cd3db125f5b0cc54090dca292ed07f4bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
