export const name="soundcloud-logo-fill";
export const id="dl_36c02889722cc1d70223";
export const url=new URL("../icons/soundcloud-logo-fill.svg?v=83c566a1458dc330f725711b726db45aa7b29398325694d5789f01453b1ccd28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
