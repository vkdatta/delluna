export const name="aspect_ratio";
export const id="dl_281cc5e030b590cb5381";
export const url=new URL("../icons/aspect_ratio.svg?v=e375826390f83f1db68e0d28349f72b94a46a3ad1fecb07d24fb32265447b5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
