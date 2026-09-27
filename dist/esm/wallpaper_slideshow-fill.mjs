export const name="wallpaper_slideshow-fill";
export const id="dl_cc5df4699e10c37591d2";
export const url=new URL("../icons/wallpaper_slideshow-fill.svg?v=0de8912255722e5e5dd813fcca0005f341431fe33540903c513182aee582bb6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
