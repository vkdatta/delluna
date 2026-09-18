export const name="routine-fill";
export const id="dl_a45eebf5dd6d4e61be4f";
export const url=new URL("../icons/R/routine-fill.svg?v=2e341f66517204aa66f3b9d8428432f4060284628317721f50117b4339d4b192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
