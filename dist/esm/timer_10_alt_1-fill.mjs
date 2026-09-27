export const name="timer_10_alt_1-fill";
export const id="dl_8b02d26b98895c25c5b4";
export const url=new URL("../icons/timer_10_alt_1-fill.svg?v=5f312007dc4ee70a3cddef7e8bf07920cf3abcba7d33aeed4e4a673b2621395b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
