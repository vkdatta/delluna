export const name="biohazard";
export const id="dl_a0d50eb0c8ee4a2cbdee";
export const url=new URL("../icons/biohazard.svg?v=64aabeaeabc9f2654e01240247dd5f246067483c1d62dfaea911d0212f682c61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
