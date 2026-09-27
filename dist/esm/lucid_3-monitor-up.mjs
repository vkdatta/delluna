export const name="lucid_3-monitor-up";
export const id="dl_740f1a251d3844789d2f";
export const url=new URL("../icons/lucid_3-monitor-up.svg?v=339e2eb98235881c5e2bfa46824d9cebac225ea8de7b1ed3551a9480bfa63b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
