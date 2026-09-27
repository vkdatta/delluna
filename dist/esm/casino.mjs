export const name="casino";
export const id="dl_1bbfadc4a6496cac5e2c";
export const url=new URL("../icons/casino.svg?v=83c2673a9781206afa37680470a3dc5c7c98cb93336f8f7c1d8ccbddf45ac005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
