export const name="folded_hands-fill";
export const id="dl_edaec49e9b5645a1b00d";
export const url=new URL("../icons/F/folded_hands-fill.svg?v=cbbc231531d15067fbad842493d3f79f25dde3f6047dc2a7bfa15f2082f276da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
