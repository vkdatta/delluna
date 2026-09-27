export const name="timer_3_alt_1";
export const id="dl_81d8a9568104c5a186df";
export const url=new URL("../icons/timer_3_alt_1.svg?v=c54f8511310eb44757c92034cc5536d23881a8f70dc9e3933e1a70f3a7aafe4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
