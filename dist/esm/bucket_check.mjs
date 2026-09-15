export const name="bucket_check";
export const id="dl_2fb781cb1cce45b7a814";
export const url=new URL("../icons/B/bucket_check.svg?v=e0b77d0777c26e33fe09bc2e72af5500a2e5b784449ca19b226b58f6a8a98c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
