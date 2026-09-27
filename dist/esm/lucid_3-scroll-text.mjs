export const name="lucid_3-scroll-text";
export const id="dl_acac7bef925e470e8595";
export const url=new URL("../icons/lucid_3-scroll-text.svg?v=210980427e46d71aa8123f70de3b97ccced560b2305d04e4125db500a453f1e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
