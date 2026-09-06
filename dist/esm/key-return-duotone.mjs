export const name="key-return-duotone";
export const id="dl_9476e24f0a9541d5aabc";
export const url=new URL("../icons/key-return-duotone.svg?v=aa359309bd074099bbc10fd8d8c5f99cea28ae2489c9e95b018daf3900ba9fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
