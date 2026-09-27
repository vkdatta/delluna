export const name="spray-bottle-bold";
export const id="dl_fe672fca985add1e8a05";
export const url=new URL("../icons/spray-bottle-bold.svg?v=026a4fa3f31e0eb1bb5adf429d65b981541155971bd17315eab9708ee7e616d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
