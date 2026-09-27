export const name="meteor-duotone";
export const id="dl_08cbdb39a9254cf4b530";
export const url=new URL("../icons/meteor-duotone.svg?v=a2f16b994316d558144ddfe8c0ee87586a2465b6d064b84031f6246a9ae4f679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
