export const name="bid_landscape_disabled";
export const id="dl_b1e0796bdc6a47b588a0";
export const url=new URL("../icons/B/bid_landscape_disabled.svg?v=da451d5c76cbfed3296edc2a451529d9255a52d011c00262931e4a0b8b0166ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
