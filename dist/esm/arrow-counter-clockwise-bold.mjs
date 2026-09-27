export const name="arrow-counter-clockwise-bold";
export const id="dl_a941cf36d1c84a429670";
export const url=new URL("../icons/arrow-counter-clockwise-bold.svg?v=f902dce624519bb773119247b0adaadb057039a35f5d5a28f4abcb090a6e989c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
