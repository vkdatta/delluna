export const name="mic_gear-fill";
export const id="dl_34331af52c9ee1f6bbd8";
export const url=new URL("../icons/mic_gear-fill.svg?v=7c166c647283de0a14b409c21c89e82fab46a54b0974366223234f035f2ecbbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
