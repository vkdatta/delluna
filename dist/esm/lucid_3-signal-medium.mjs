export const name="lucid_3-signal-medium";
export const id="dl_2da688009cf64004b400";
export const url=new URL("../icons/lucid_3-signal-medium.svg?v=48eb52b535e7425a0b321d18ee42e922a0883a86ddce9b42ea2c0f6c4b647e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
