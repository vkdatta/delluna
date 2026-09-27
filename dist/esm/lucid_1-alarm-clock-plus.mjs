export const name="lucid_1-alarm-clock-plus";
export const id="dl_82431a13d5b64b91b2d3";
export const url=new URL("../icons/lucid_1-alarm-clock-plus.svg?v=59c2dcb35a6fad2639a08ed61bcb5d5a4d28d99b8f1c78b450f4803d5597c1aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
