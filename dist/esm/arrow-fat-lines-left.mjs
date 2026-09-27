export const name="arrow-fat-lines-left";
export const id="dl_cdaa392eba3843a0b0c8";
export const url=new URL("../icons/arrow-fat-lines-left.svg?v=69438575b227f31aa6ca54289a086695d00292caa727823bb2c0aecd7a941bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
