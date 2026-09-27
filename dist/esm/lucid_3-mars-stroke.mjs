export const name="lucid_3-mars-stroke";
export const id="dl_99b60625fdb4493ea976";
export const url=new URL("../icons/lucid_3-mars-stroke.svg?v=3771528066f719511f687cb020122b434a765521e58aba27bf3b4b4c4de1c578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
