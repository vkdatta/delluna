export const name="hourglass-low";
export const id="dl_0f9e9731cbc743f6a037";
export const url=new URL("../icons/hourglass-low.svg?v=32778b0ff7e23ee916dcd82777bdcba5507df23722984fb633d10b3b92ef852d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
