export const name="share-network-bold";
export const id="dl_9d80f3c6aef0574c83ff";
export const url=new URL("../icons/share-network-bold.svg?v=13c8180f9b4fc353517ec7a36f38699fea3cb5eed7a72286be1ec5fda4238ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
