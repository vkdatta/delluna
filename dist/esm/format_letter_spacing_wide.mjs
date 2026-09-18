export const name="format_letter_spacing_wide";
export const id="dl_ae74b45fe64a452592b3";
export const url=new URL("../icons/format_letter_spacing_wide.svg?v=04b28f2261e5603d201ce74a695cbe27a68341b5e611e6043987bce7ef6ed70c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
