export const name="number-circle-four-bold";
export const id="dl_bfef25aa97a24e7399fc";
export const url=new URL("../icons/number-circle-four-bold.svg?v=0ba7e9e4198c64bd9efcaafcd1c279a02714edb2e6bd36efb86d0c2b9a86706f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
