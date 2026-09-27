export const name="forest-fill";
export const id="dl_ed424d08198af4504475";
export const url=new URL("../icons/forest-fill.svg?v=2422002aebda348741c91d2e2a299c4e0a5071ef088f98e39d76f473651a550d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
