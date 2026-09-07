export const name="split-horizontal-thin";
export const id="dl_04b768fd4855419b99af";
export const url=new URL("../icons/S/split-horizontal-thin.svg?v=21e38e7bab2d12aa98f9c4c7debca6e79db2f15018a91fea276cf8e802445436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
