export const name="instagram-logo-fill";
export const id="dl_9fde1c10ffa34e9a9550";
export const url=new URL("../icons/instagram-logo-fill.svg?v=471aa8b778315fa3ef18f2c937fe9a5f47851d16e0ec2ad3626dfbc81ebec97e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
