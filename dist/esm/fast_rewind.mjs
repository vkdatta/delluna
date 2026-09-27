export const name="fast_rewind";
export const id="dl_1f9657a6b79e6e449ddf";
export const url=new URL("../icons/fast_rewind.svg?v=f654e5eb7fb9b5b5531a3d23de9120753db0d08d86403aec48f0885c9b39371e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
