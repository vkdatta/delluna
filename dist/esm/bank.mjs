export const name="bank";
export const id="dl_8c8f39448b9d497dbb06";
export const url=new URL("../icons/bank.svg?v=d52f812b44373ca15c1a8050ba27b35b8f4e014f1fcfe5fbaf9ee84d736b0c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
