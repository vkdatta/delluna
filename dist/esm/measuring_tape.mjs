export const name="measuring_tape";
export const id="dl_326dcd0f40098b31b01a";
export const url=new URL("../icons/measuring_tape.svg?v=39a36aeb6739d6d94d79146e5be49672001b2da7a80991638ebccb5285d7247a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
