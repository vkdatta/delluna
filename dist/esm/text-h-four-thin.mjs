export const name="text-h-four-thin";
export const id="dl_fe22564468df497d8553";
export const url=new URL("../icons/T/text-h-four-thin.svg?v=e7f34ea3fac28abf9945ffe8a69fbdee6a4c3cd6d6bb6a50996fa51ced72513b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
