export const name="arrow-elbow-down-left-bold";
export const id="dl_ab5c2e4d8a6248fcb2c2";
export const url=new URL("../icons/arrow-elbow-down-left-bold.svg?v=5ec086ae2bfdef87c8bf73ce1812e7c7399f408fec38abe6b5c4c2e889d8616a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
