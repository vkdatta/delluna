export const name="compass-light";
export const id="dl_8fafb5dca81e476e9b12";
export const url=new URL("../icons/compass-light.svg?v=44ad708cd407a1e30b5a8c9d9902d0d98d7ab707dc481ff88c970a659b07e7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
