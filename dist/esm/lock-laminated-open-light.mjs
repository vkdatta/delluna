export const name="lock-laminated-open-light";
export const id="dl_b5ea0ae1e75a4e37a508";
export const url=new URL("../icons/lock-laminated-open-light.svg?v=209eb0608e091429e5c624968c7f58ec222c7d6df08eb9f3278d45fc3af39bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
