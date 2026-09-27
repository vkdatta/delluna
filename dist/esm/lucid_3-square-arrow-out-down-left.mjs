export const name="lucid_3-square-arrow-out-down-left";
export const id="dl_352cd52442f04bc1a4df";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-left.svg?v=4c84115bfe7bf7e4029ccc0b42153f2537780efa343efea5d903f5cb515a8ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
