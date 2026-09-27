export const name="database_search-fill";
export const id="dl_9e79daa8ebb9e442ef6f";
export const url=new URL("../icons/database_search-fill.svg?v=e27eff2229ad32ea44e795745316e13a0d2e537cac37bad01053b5bcb7ef7bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
