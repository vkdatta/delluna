export const name="city";
export const id="dl_ad179bc8595e41cda7a9";
export const url=new URL("../icons/city.svg?v=57c44ef51eb8900805f6250d4ebfd0c4beaefce02dfea005b3111419a6508da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
