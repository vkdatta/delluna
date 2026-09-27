export const name="headset-duotone";
export const id="dl_7cd4a70cf2d347e684ba";
export const url=new URL("../icons/headset-duotone.svg?v=c3c54d8e8424e71cc7bad13d04161deddef3edc93bf673c3bc306ae3eea37a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
