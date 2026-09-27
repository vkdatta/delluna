export const name="heart_broken-fill";
export const id="dl_3503ec7d6519f488c5fc";
export const url=new URL("../icons/heart_broken-fill.svg?v=13aa9f1782cc5138fd43e7b7468f66a9d5067b611a36e8615bbd2810a672d16d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
