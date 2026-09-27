export const name="device_hub";
export const id="dl_59978e4c9939b6ac5c79";
export const url=new URL("../icons/device_hub.svg?v=e4b4ea2fd73728b564873cfeb3c77bc454c5a08c9f90c45250e3c7da463cb993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
