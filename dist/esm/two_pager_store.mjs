export const name="two_pager_store";
export const id="dl_41c5979e937c4f21ab5d";
export const url=new URL("../icons/T/two_pager_store.svg?v=a7d3a67cc2aa1f79cb8c340c10b5a76d1de2538f5353380828c1e7890a45bb4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
