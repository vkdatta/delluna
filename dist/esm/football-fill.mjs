export const name="football-fill";
export const id="dl_e5212412b8314fff8d06";
export const url=new URL("../icons/football-fill.svg?v=5a6632ca8ed9d4984f11d53a55fae1b242322aaf2d07c7a347c93ecd75752616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
