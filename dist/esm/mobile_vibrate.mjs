export const name="mobile_vibrate";
export const id="dl_a2213ba8447ffba321be";
export const url=new URL("../icons/mobile_vibrate.svg?v=dd6ed0b0b8bb92c444c837608217d09b9cf41176bd805d5016388494350e0fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
