export const name="language_us_colemak-fill";
export const id="dl_86dc28701f9d63623a25";
export const url=new URL("../icons/language_us_colemak-fill.svg?v=804a91e8843221f26d4a0e67d5e17df0594f7881dd1f0fedd194d191e306d81a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
