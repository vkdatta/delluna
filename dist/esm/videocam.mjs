export const name="videocam";
export const id="dl_0238fef534788bb51208";
export const url=new URL("../icons/videocam.svg?v=f3e92bf6a2c82ef0d9656b1d71db67844a75b856e9a0c986d2c78057722cfb39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
