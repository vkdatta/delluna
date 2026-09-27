export const name="disc-duotone";
export const id="dl_6a0e8c5191104af99f27";
export const url=new URL("../icons/disc-duotone.svg?v=b2f120e646d8bbac755a31e12947faac3c62371e21ed7ac042cbd37f5cacc027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
