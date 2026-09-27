export const name="browser_updated";
export const id="dl_97ece68a9da58c007d9f";
export const url=new URL("../icons/browser_updated.svg?v=8d276e18d59fa0f03e5e0aee3afde1fb99edc20de3f87087f40b20f6eacfc9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
