export const name="home_storage_gear";
export const id="dl_c3fc3eead9f041a98444";
export const url=new URL("../icons/home_storage_gear.svg?v=d7cefe6ee5bc6f3b51f4b3ccb84389cccfe0506375522a5453f642e21aeb5e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
