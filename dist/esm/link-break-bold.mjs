export const name="link-break-bold";
export const id="dl_219cd4dee4144568afcc";
export const url=new URL("../icons/link-break-bold.svg?v=43016a817b3969570cb1aa34abb602c343c048da6c4d2e22e78844fd6359a6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
