export const name="phone-x-duotone";
export const id="dl_9661f4f60278455f8d70";
export const url=new URL("../icons/phone-x-duotone.svg?v=025b89ce8f7c1b5cc60ba29b1bc3dde14e2eba01fdde234d8dcc2df643d045f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
