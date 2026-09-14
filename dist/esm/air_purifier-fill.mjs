export const name="air_purifier-fill";
export const id="dl_e06c03f253f94012bca1";
export const url=new URL("../icons/A/air_purifier-fill.svg?v=46ff9cc6edf9ef2326fbc66536d5a17d37a87ed5bb8a0704a17bd91441e0a355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
