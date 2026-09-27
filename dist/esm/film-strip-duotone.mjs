export const name="film-strip-duotone";
export const id="dl_40057271dbaf4084ae5e";
export const url=new URL("../icons/film-strip-duotone.svg?v=d422aa4881cc5051f25597eb1f1cf23881b1477c009aab0536b451fa59d82875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
