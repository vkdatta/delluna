export const name="youtube-logo-light";
export const id="dl_d684ec03bd9b4fe6a921";
export const url=new URL("../icons/Y/youtube-logo-light.svg?v=0ef24af7e20493f5d39cedf064e852643813c5258423cc958ab067d2e7cc6ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
