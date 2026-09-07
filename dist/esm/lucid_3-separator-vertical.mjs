export const name="lucid_3-separator-vertical";
export const id="dl_4c51270fc801484f8702";
export const url=new URL("../icons/lucid_3-separator-vertical.svg?v=b340ffd8385711ea90815214fe497400628903f76376736b26e9dae1d92ecd3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
