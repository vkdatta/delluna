export const name="wallpaper_slideshow-fill";
export const id="dl_06618efc581645847ef6";
export const url=new URL("../icons/wallpaper_slideshow-fill.svg?v=1605a10be6c6ad1b94dad9953501ba07666e2a67acc285faba057918cdadc32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
