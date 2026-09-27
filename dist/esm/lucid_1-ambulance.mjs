export const name="lucid_1-ambulance";
export const id="dl_046589c0eecc413a9522";
export const url=new URL("../icons/lucid_1-ambulance.svg?v=be1c536c3c7b248ee6cc2c990eb7ce0951f43e9c8da0978a5fb354c3cbd69de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
