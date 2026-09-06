export const name="folder-minus";
export const id="dl_89d5071b8baf4f92aa37";
export const url=new URL("../icons/folder-minus.svg?v=88adc72792b63ffc5b18be5828c835badbc0a552e84b08576da6fe99140817ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
