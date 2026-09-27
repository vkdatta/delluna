export const name="text-strikethrough-light";
export const id="dl_d211efa1f7d269e297ac";
export const url=new URL("../icons/text-strikethrough-light.svg?v=16281b628db942939cd698fea10bbdb98ebfe5606b714f1d4bca91e9f4ffe934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
