export const name="lucid_3-motorbike";
export const id="dl_60b2b5d5ff0140aab54c";
export const url=new URL("../icons/lucid_3-motorbike.svg?v=712320dc1e9fa9bf8174b9581bda8df92299cce0eff692b96895496a92317d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
