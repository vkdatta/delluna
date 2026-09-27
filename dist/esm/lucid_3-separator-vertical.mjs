export const name="lucid_3-separator-vertical";
export const id="dl_4c51270fc801484f8702";
export const url=new URL("../icons/lucid_3-separator-vertical.svg?v=b27c7a4a35b018d12d8f059393f0e94b77510b2944a4affa09e13b930601ae72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
