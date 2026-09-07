export const name="mosque-light";
export const id="dl_9989b2c5a6964088b646";
export const url=new URL("../icons/mosque-light.svg?v=bdfb8329be986a4508e231638c5a3c4cdd8e25d60da394ae6b3f21d5eee2592c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
