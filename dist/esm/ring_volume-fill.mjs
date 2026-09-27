export const name="ring_volume-fill";
export const id="dl_df55a3bbba21fb685fec";
export const url=new URL("../icons/ring_volume-fill.svg?v=0c418c99c3bec6834042882b0e8ba550976ef291002953ab4f0eca06e88aebb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
