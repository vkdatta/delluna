export const name="share_location";
export const id="dl_a15c1cff3f0c4fae8f97";
export const url=new URL("../icons/S/share_location.svg?v=1958b3ad6b1a2f3f9d3f847ee37fb4c51c759927c375ae85941d77c5dc9aa1ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
