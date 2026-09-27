export const name="timer_5-fill";
export const id="dl_4dd546e4d87b0b517a98";
export const url=new URL("../icons/timer_5-fill.svg?v=eccc9603a52868f98c038040443c216260bca3604a80366445c95fcb2b2382f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
