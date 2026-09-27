export const name="twitch-logo-light";
export const id="dl_afa0f79cdb6ed51fed8e";
export const url=new URL("../icons/twitch-logo-light.svg?v=3c44e39862178a3007fe1754e917fa8d84626b0ea3d5e5c7adf7d2cf60a10f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
