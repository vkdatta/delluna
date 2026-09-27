export const name="bid_landscape_disabled";
export const id="dl_a5f2a1d14526cc1ed4d8";
export const url=new URL("../icons/bid_landscape_disabled.svg?v=168bd7bf567f857b53780319d852678fc83f6ae64f613fdcab68c5e3ad34b412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
