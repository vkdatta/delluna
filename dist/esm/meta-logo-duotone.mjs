export const name="meta-logo-duotone";
export const id="dl_bdf0cdf0700f403895a9";
export const url=new URL("../icons/meta-logo-duotone.svg?v=c783f81d411c93bbe4539242c788eaeca1eb1fe75f6d450296bde4735b083c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
