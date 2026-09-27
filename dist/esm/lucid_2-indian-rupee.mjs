export const name="lucid_2-indian-rupee";
export const id="dl_78fec6d46574485b8acb";
export const url=new URL("../icons/lucid_2-indian-rupee.svg?v=134bceb8b6179e439723100cd007f4e7c2b911a61c03f42c205e2018edfc3014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
