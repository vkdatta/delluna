export const name="gift-fill";
export const id="dl_d41d5de8032e4250a79b";
export const url=new URL("../icons/gift-fill.svg?v=fdba765e1df71480b79d25e25cd566a6ef2ec2e833398dfc1ac965f3236dc866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
