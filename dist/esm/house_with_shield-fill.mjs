export const name="house_with_shield-fill";
export const id="dl_41f919e025f8ede7bfdf";
export const url=new URL("../icons/house_with_shield-fill.svg?v=c91b90b7cfaf5d46a42547eeaa68f97c08016c64642d0f5e26dbeba026249915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
