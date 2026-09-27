export const name="lock-key-open-bold";
export const id="dl_9448b948442a40a8bdbe";
export const url=new URL("../icons/lock-key-open-bold.svg?v=2ea3d30972c5bffaa4c0d9fffa6826cddf92b22915fd25810d55a0f49ed47de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
