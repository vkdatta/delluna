export const name="person-simple-bike-bold";
export const id="dl_02a77758d2c54e76a525";
export const url=new URL("../icons/person-simple-bike-bold.svg?v=ed93a0ab66eedad7062287c9ac7c74657b22f79ee11db02ec4182ada9546547f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
