export const name="lucid_1-bell-check";
export const id="dl_f6f52c5c28d747719d0c";
export const url=new URL("../icons/lucid_1-bell-check.svg?v=f0fb2bb50410a6d7868e9863621a216e4d07674f3fb669e2b8e660b69750709d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
