export const name="bid_landscape_disabled-fill";
export const id="dl_f8cd1677cec391f663f1";
export const url=new URL("../icons/bid_landscape_disabled-fill.svg?v=623e033dfa5c6ad78472ffbb9ecabb2841bbb6bb1bfa36cf1b15b9eb6a976405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
