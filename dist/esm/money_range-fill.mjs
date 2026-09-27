export const name="money_range-fill";
export const id="dl_473cb121e79b6496991c";
export const url=new URL("../icons/money_range-fill.svg?v=9e201e51b4771f269525b278e1b8714ebf12e30f86dd87b1ffe4f8a4cb0df363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
