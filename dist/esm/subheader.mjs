export const name="subheader";
export const id="dl_3e69755274106baaf5f7";
export const url=new URL("../icons/subheader.svg?v=2c4360a10c60953ff68c8a59eb7475389caf966ecb1f0f82674e060f017fb043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
