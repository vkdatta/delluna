export const name="chair_counter";
export const id="dl_12e625d9fb13332f7655";
export const url=new URL("../icons/chair_counter.svg?v=f259f68eb0c9e1d7a8985b602ea4c23bc0e2b4833968a5253b1ed74fbb653647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
