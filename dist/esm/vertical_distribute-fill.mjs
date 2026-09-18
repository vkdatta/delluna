export const name="vertical_distribute-fill";
export const id="dl_7e2abea141914850a4c2";
export const url=new URL("../icons/V/vertical_distribute-fill.svg?v=2c483c3189382522b34ba4baa890b8d919fc0250bc2473b3c1aec2dacb2eedd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
