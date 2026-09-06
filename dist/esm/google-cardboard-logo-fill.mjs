export const name="google-cardboard-logo-fill";
export const id="dl_fbfa308a4e044acdb538";
export const url=new URL("../icons/google-cardboard-logo-fill.svg?v=7458abcc1a8671ae041fd2c3147c9c42a12fa26f7ceac6c1c8671b721aff4f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
