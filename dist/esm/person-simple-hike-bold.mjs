export const name="person-simple-hike-bold";
export const id="dl_9e5cfe398074441ebeeb";
export const url=new URL("../icons/person-simple-hike-bold.svg?v=5d42f80e59150bd31850eb71415822bba19d9a987c784c2c6b087679dbe810ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
