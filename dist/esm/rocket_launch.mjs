export const name="rocket_launch";
export const id="dl_0c2332286c01d3a8f7f5";
export const url=new URL("../icons/rocket_launch.svg?v=4736d4f80dbbe5b4f9d137905d114ae1022931418ba48bdeb3ba47948232a043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
