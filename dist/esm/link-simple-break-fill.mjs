export const name="link-simple-break-fill";
export const id="dl_5a2ca645c57049068078";
export const url=new URL("../icons/link-simple-break-fill.svg?v=4e6c845f56deb64813c8ce585d067b43c3804d6d41a66f35ee680d41f4b6266f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
