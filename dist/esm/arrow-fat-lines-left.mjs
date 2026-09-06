export const name="arrow-fat-lines-left";
export const id="dl_cdaa392eba3843a0b0c8";
export const url=new URL("../icons/arrow-fat-lines-left.svg?v=fd46a1a8712a949c8480029bf4f91f9102c6fb4e4b53da1333e8e67ac06911f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
