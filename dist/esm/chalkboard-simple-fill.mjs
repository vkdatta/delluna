export const name="chalkboard-simple-fill";
export const id="dl_0c0b95571a2e482db2fd";
export const url=new URL("../icons/chalkboard-simple-fill.svg?v=7ab0cdee62f29c58a44ff1670ff34d9a88485392cc2367a728795599846c7fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
