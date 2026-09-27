export const name="network-light";
export const id="dl_d0bb8c65b8704202957b";
export const url=new URL("../icons/network-light.svg?v=76b9aaef08305c80af421d7b907077a01fd7204c076a297f40f361aab99dd456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
