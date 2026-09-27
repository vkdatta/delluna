export const name="google-photos-logo-thin";
export const id="dl_b425eaf292b743f69782";
export const url=new URL("../icons/google-photos-logo-thin.svg?v=835fe9cd26771704d67c56599ef2622433b90ae14bf382517e08c22495e5c45f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
