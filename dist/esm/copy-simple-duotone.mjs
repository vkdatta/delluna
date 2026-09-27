export const name="copy-simple-duotone";
export const id="dl_f7ff2d339449426eba65";
export const url=new URL("../icons/copy-simple-duotone.svg?v=f318678e745c53ffef3446d823dc1f901a842202d0d0fb4d31feb150a832aca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
