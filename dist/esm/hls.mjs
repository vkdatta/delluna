export const name="hls";
export const id="dl_d8ddb37d8bba521d9e0e";
export const url=new URL("../icons/hls.svg?v=75dc0f629042e899fd9ad1d26aa2bac5b4b2c8a94e0fc1ca600f6b18f492e555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
