export const name="users";
export const id="dl_37deeced7b6b445f95df";
export const url=new URL("../icons/U/users.svg?v=b3385e4c6aa03f7e16d1b03887c2cdff9900f5a7edbd5ea5176055938ccfb908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
