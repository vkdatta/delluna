export const name="house";
export const id="dl_624d964041b4487695cc";
export const url=new URL("../icons/house.svg?v=9bb685eff254444422d1a487e2c4197a366c5196653988d936b3861a46161306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
