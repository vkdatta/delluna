export const name="solar-panel-bold";
export const id="dl_9ade478d01b04c3e6562";
export const url=new URL("../icons/solar-panel-bold.svg?v=3b88d24d37d13aa92cf4639f35848283919c99b19bdb237b75d4d3d5fcc8a988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
