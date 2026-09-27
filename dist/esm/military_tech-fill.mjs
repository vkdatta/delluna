export const name="military_tech-fill";
export const id="dl_bdd85760980b2b17566d";
export const url=new URL("../icons/military_tech-fill.svg?v=d325c3f174d09a933ac223d9ef8a06006e211a418d5f5aed067761452186aa63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
