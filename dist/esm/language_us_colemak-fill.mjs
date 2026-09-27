export const name="language_us_colemak-fill";
export const id="dl_036bd831cb1e8829915f";
export const url=new URL("../icons/language_us_colemak-fill.svg?v=896c7a5b8f690442b0a69d7fddbe012a68fb779000de2252dfd302c9c912ded5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
