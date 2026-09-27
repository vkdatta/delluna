export const name="timer_5-fill";
export const id="dl_220f634ec10fa913b1b5";
export const url=new URL("../icons/timer_5-fill.svg?v=f6e4f553c55b9f7f948b7b78577c88fbb805ff3ec3460a59336bb97e51a03a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
