export const name="chart-bar-duotone";
export const id="dl_726a9cf3a7ac47b6addb";
export const url=new URL("../icons/chart-bar-duotone.svg?v=f2c553c105a1d891b03e7f491f1550b7e4933c44ccf4a96ae16e7b9176173b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
