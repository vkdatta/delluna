export const name="lucid_2-earth";
export const id="dl_248341fc7dc640438aa4";
export const url=new URL("../icons/lucid_2-earth.svg?v=6658c6c1e1fecdc53d380ed9ce8eeb77a3310e2367dd27caafbd9a215b92ee0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
