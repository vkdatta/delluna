export const name="wifi-medium";
export const id="dl_7a0260e207744ac780a6";
export const url=new URL("../icons/W/wifi-medium.svg?v=ae92a3a813e5be912be60ade2be8d5a1b342bc676bfb75f6cf5dabc9fa24a9c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
