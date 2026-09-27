export const name="person_shield";
export const id="dl_0c245239801023b352b8";
export const url=new URL("../icons/person_shield.svg?v=6bc9038f23be58c40ac8f55a457a45ae99df9a7e300be1b149277dc0ea8352f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
