export const name="check-bold";
export const id="dl_2d27fe36a0304005aff4";
export const url=new URL("../icons/check-bold.svg?v=93dbf1119d6e962b8b4e85eb9ccc71bde1a637148f9a3a986fac9904b6848507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
