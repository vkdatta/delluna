export const name="format_letter_spacing_wide";
export const id="dl_b257ff3ac89a4a47b668";
export const url=new URL("../icons/format_letter_spacing_wide.svg?v=48a551c327fe00e3b634f9262c244ad619f734f49976e5991ee90c96b2e3e607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
