export const name="ophthalmology";
export const id="dl_da0d02b5e34f32f92f7c";
export const url=new URL("../icons/ophthalmology.svg?v=c1fff665107571e9ebbddd547c314c0adee33ea8130f9df99aad9f792dac0ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
