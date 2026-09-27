export const name="twitch-logo";
export const id="dl_1fc7df194e06b377b6a4";
export const url=new URL("../icons/twitch-logo.svg?v=f2799169ad7280b2fe4f011ce0e0823778f88c0b045a1e8cf10f3de70464b169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
