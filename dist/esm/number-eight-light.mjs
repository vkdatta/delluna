export const name="number-eight-light";
export const id="dl_5b6770e4e35d406c9525";
export const url=new URL("../icons/number-eight-light.svg?v=f9b8b2295b506fe611cbd8212c8f38922a09601ec9ac3a354d4e123e0a15678e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
