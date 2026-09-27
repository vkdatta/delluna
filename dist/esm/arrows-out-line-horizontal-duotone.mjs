export const name="arrows-out-line-horizontal-duotone";
export const id="dl_0a2e42ba0ce949168e50";
export const url=new URL("../icons/arrows-out-line-horizontal-duotone.svg?v=d914a998bfc22935fa0a407de0d7699db171f93ba5a5a11cf78d885e08d16e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
