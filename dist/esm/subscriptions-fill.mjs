export const name="subscriptions-fill";
export const id="dl_f35110f8f420b59c1be4";
export const url=new URL("../icons/subscriptions-fill.svg?v=4e34acc399d46a4d3cdb95120443e7db8ac4021665be55b8c8fca84763be96e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
