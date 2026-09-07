export const name="steering-wheel-bold";
export const id="dl_9334d6aacc2c4ea08ceb";
export const url=new URL("../icons/S/steering-wheel-bold.svg?v=1ac49ec1db6eafd6d4caf1c5e814aa5c093e5966ce0262ba062949d155c8ebef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
