export const name="mosque-light";
export const id="dl_9989b2c5a6964088b646";
export const url=new URL("../icons/mosque-light.svg?v=ccb39fb3693d5fc9b370ff0193c028c0ec0deae0a6f9c4093a86b32c1c98b5ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
