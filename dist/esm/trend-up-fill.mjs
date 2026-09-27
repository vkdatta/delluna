export const name="trend-up-fill";
export const id="dl_f55c0d5bff594cdb7864";
export const url=new URL("../icons/trend-up-fill.svg?v=4083c010fb22123016b7cfd3cea0002443005a3061df1f89fa6c89a3b1f37a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
