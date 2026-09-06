export const name="arrow-up-light";
export const id="dl_2467e144911d4e7bbca1";
export const url=new URL("../icons/arrow-up-light.svg?v=c06d325e0f16034a32df2b60379dfa65598b0d2572ff5e7652eb2d1f498ee39f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
