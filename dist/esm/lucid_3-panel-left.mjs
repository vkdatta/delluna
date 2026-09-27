export const name="lucid_3-panel-left";
export const id="dl_f3d92b2e446a4ea48206";
export const url=new URL("../icons/lucid_3-panel-left.svg?v=d77fc614ae1bcf760a2e715322ddb081df52d112468582a46fa53e2f4a9c28a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
