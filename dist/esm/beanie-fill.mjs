export const name="beanie-fill";
export const id="dl_194e56ebf2f04cc0bf8a";
export const url=new URL("../icons/beanie-fill.svg?v=cbac75f348737da6ee6eb219407108baa6a7928cf99a8f35bba662ecb1f6f1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
