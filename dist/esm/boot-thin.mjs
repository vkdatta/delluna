export const name="boot-thin";
export const id="dl_7fe9395b64fd42ab878a";
export const url=new URL("../icons/boot-thin.svg?v=a4a506b37da03f2e999ee5843c2482230a723f1c041fcbfd7372b2776abecb8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
