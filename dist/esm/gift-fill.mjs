export const name="gift-fill";
export const id="dl_d41d5de8032e4250a79b";
export const url=new URL("../icons/gift-fill.svg?v=f092b488aa1ce02f4cc54f2f37a17f6e352b4e0dddcde7e423dd14410905a008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
