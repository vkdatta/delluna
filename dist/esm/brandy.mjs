export const name="brandy";
export const id="dl_d1b5b336d9584c2289d2";
export const url=new URL("../icons/brandy.svg?v=190f5323d405c9d2e6984151d9615d3ecc926fec55674e47038f8172163751d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
