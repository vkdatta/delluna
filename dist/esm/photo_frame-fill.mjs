export const name="photo_frame-fill";
export const id="dl_fda3ae059a1543b18304";
export const url=new URL("../icons/photo_frame-fill.svg?v=2bdf327166fb0612de25822c70a5068c378846e4483c3a99bbc5a3b434aa0273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
