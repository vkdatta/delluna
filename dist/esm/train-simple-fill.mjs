export const name="train-simple-fill";
export const id="dl_0ab47005702df7f2ce5a";
export const url=new URL("../icons/train-simple-fill.svg?v=bddfa4791a57d9c06c06e2edd1a465cef9d9d6b1ac1a5b397af3178e19ea5c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
