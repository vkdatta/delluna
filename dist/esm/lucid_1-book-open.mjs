export const name="lucid_1-book-open";
export const id="dl_59e2e1d0180247abba0d";
export const url=new URL("../icons/lucid_1-book-open.svg?v=00692f841cc7c39ed8272e3d082c8dc344494ceaf10d25326ab357493612d0b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
