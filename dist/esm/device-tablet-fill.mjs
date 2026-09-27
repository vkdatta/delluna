export const name="device-tablet-fill";
export const id="dl_612554495e744c30a37b";
export const url=new URL("../icons/device-tablet-fill.svg?v=d108e442449e47267051e7546e5a08f97a110f84403e93765a8fce40a2c24a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
