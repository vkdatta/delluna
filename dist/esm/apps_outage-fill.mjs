export const name="apps_outage-fill";
export const id="dl_42814091abb241f78fae";
export const url=new URL("../icons/apps_outage-fill.svg?v=77a1ffc94ed035c028d830c4e11c91bd616744e866674a903075de9f6b22c0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
