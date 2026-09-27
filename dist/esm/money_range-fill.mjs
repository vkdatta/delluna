export const name="money_range-fill";
export const id="dl_43a06a40c47bdfcf7415";
export const url=new URL("../icons/money_range-fill.svg?v=933389fad6c0fffe957fefde6baca5582c2971f6ef560f67e621534ebce0604f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
