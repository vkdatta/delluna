export const name="twitch-logo-light";
export const id="dl_25ee2fc77a1f40789fe7";
export const url=new URL("../icons/T/twitch-logo-light.svg?v=3c44e39862178a3007fe1754e917fa8d84626b0ea3d5e5c7adf7d2cf60a10f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
