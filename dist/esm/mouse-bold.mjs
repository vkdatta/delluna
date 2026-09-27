export const name="mouse-bold";
export const id="dl_626f5c93924a4208b0d0";
export const url=new URL("../icons/mouse-bold.svg?v=b1d742786ed826029e6464835163f049ad85c41e77a6bf521401a5b9c74cc6e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
