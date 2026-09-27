export const name="spotify-logo-thin";
export const id="dl_2c8613f12328a335ef45";
export const url=new URL("../icons/spotify-logo-thin.svg?v=6572287289259bc80d37b90374ee189195f0b591c5d5d084af964c264a5f691d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
