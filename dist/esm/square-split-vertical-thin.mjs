export const name="square-split-vertical-thin";
export const id="dl_b8eaba9298f4d74f4f37";
export const url=new URL("../icons/square-split-vertical-thin.svg?v=d8023e900ad5cf233865fb0eee16a6c0cfb379fc623ed9953dcfe1b66434d1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
