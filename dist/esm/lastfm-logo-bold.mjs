export const name="lastfm-logo-bold";
export const id="dl_99829e5a865d491f932b";
export const url=new URL("../icons/lastfm-logo-bold.svg?v=9de62c18f867cfa36981eef6ce308a7d927f8d643410670b543cd6599ca091a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
