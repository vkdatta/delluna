export const name="cloud-x-light";
export const id="dl_96e4a578584148a8a859";
export const url=new URL("../icons/cloud-x-light.svg?v=9ab94216bbe522b78acdb0a7b04854af67ab1bfd6ea0a0ae63fd5b5791ebb139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
