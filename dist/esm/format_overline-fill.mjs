export const name="format_overline-fill";
export const id="dl_c575842977ed8dc3403d";
export const url=new URL("../icons/format_overline-fill.svg?v=996eb2d87febdf2a27628a6ce12260305c71768109337661bec6c0398f2aedfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
