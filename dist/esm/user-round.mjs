export const name="user-round";
export const id="dl_94809bb65a2845c589ca";
export const url=new URL("../icons/user-round.svg?v=20c1ec71a9f47430eb4b5bf66bd2109aa0a5b70f1a8579f787faee492a10138b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
