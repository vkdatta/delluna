export const name="discover_tune-fill";
export const id="dl_7eff27f71b56503fcad3";
export const url=new URL("../icons/discover_tune-fill.svg?v=048e3367ae62bd784a96338a86b5801506f1275db48b7c1e874c0144f59044be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
