export const name="smiley-meh-bold";
export const id="dl_73b39817076a0f6f260c";
export const url=new URL("../icons/smiley-meh-bold.svg?v=033470253a82c07bfed30e0616ef202b92d6181721cd372585ce26aedcc06f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
