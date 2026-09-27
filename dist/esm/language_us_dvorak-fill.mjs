export const name="language_us_dvorak-fill";
export const id="dl_3f5139956eb0586f7616";
export const url=new URL("../icons/language_us_dvorak-fill.svg?v=c90a10683a2851ae8964c9bba65342195cd2a991e113176dd035fdbc0aa247b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
