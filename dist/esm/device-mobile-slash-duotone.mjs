export const name="device-mobile-slash-duotone";
export const id="dl_00b95db5ce434c03bc6e";
export const url=new URL("../icons/device-mobile-slash-duotone.svg?v=e802cf161e66ef73585de1f75417bb43faf3e7faf8a8c24cb29b70270d506d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
