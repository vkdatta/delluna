export const name="pix-logo-fill";
export const id="dl_a88cfbcaebbf48f08c01";
export const url=new URL("../icons/pix-logo-fill.svg?v=a50d290b3960463ff5b07739ced11117dc4a4bc8f5a9c656464353dbf7dbbaf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
