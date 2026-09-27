export const name="google-play-logo-thin";
export const id="dl_d27182be002c4ed38d5b";
export const url=new URL("../icons/google-play-logo-thin.svg?v=3a3da4d8ff2f34d607c7e90c8bad94896a2d705371830944607f3e1892d0a860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
