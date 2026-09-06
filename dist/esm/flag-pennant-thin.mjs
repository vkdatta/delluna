export const name="flag-pennant-thin";
export const id="dl_3f5e68c7bccd4139bc8f";
export const url=new URL("../icons/flag-pennant-thin.svg?v=c0827646ed83e7517d12f88c3112ed4dbee1387571bc055a48b08b282a98951d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
