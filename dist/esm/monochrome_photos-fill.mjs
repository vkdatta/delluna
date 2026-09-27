export const name="monochrome_photos-fill";
export const id="dl_a399795e2341338cc133";
export const url=new URL("../icons/monochrome_photos-fill.svg?v=eb5322570ce7e973b15194d80e4866701c38bb4cb574cbbecb058e2285c03d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
