export const name="lucid_1-clock-9";
export const id="dl_d3d346a551a240e7b3af";
export const url=new URL("../icons/lucid_1-clock-9.svg?v=0c6d989c05831711dc37a17128ad39511df5b1be1e31565dca003cf89b47c1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
