export const name="arrow_circle_up";
export const id="dl_93a213b224ce75498df9";
export const url=new URL("../icons/arrow_circle_up.svg?v=74c47305e03f09ee0dc1d8a6fb1fc5702994bf581d07c6a9eec53983aaad88aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
