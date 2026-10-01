export const name="search_activity-fill";
export const id="dl_528f13952b4f0fb2f0af";
export const url=new URL("../icons/search_activity-fill.svg?v=5cfc85142ecdb7bedca94b14781a315e2b1b47d1bb6ebcd83ec7131a023116ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
