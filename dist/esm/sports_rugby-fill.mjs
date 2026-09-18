export const name="sports_rugby-fill";
export const id="dl_a7bb554223c642c3864a";
export const url=new URL("../icons/S/sports_rugby-fill.svg?v=03c9705423d58f0d26d9caac01fabaf7188c800e30611bfcc17d41edb382ac10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
