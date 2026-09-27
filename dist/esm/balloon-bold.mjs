export const name="balloon-bold";
export const id="dl_c2ef96ecc66f4b63ab12";
export const url=new URL("../icons/balloon-bold.svg?v=52c2203e660bba362a6b6bd199f818deff359a16dbcd713a10a788d1dab36371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
