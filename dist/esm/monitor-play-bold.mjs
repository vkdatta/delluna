export const name="monitor-play-bold";
export const id="dl_044a2b6e24c446eda100";
export const url=new URL("../icons/monitor-play-bold.svg?v=ca3b3fa7b36fb4930c9ee02397497119f8cbdedfe2e6ff1b732a1434935c0249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
