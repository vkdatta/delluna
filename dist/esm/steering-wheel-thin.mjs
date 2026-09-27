export const name="steering-wheel-thin";
export const id="dl_f734441a0bbc22e032cb";
export const url=new URL("../icons/steering-wheel-thin.svg?v=e9ae1510d2ba20ca8bd8e497ea2417bd918c125723da0a5c9c724f8095510a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
