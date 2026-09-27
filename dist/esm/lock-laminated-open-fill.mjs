export const name="lock-laminated-open-fill";
export const id="dl_5e052d22113741c0b7fd";
export const url=new URL("../icons/lock-laminated-open-fill.svg?v=77b70e5a4638e4d1f896eeeea5b57c2c46a02eb9b6b93483cc6fb9d9acbb44d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
