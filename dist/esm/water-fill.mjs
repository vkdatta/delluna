export const name="water-fill";
export const id="dl_db252edea7f976431003";
export const url=new URL("../icons/water-fill.svg?v=00ff240a7c64f26bdd86a6131f18cb8b680bb64af4f7ba22e4fc1b8bf4ae7256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
