export const name="coin-light";
export const id="dl_fc77c48be35b4c1fa089";
export const url=new URL("../icons/coin-light.svg?v=8cecd97c5a0b23e15b90929f56166ccaef9e3cd3e0d7489f10219f69047f6cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
