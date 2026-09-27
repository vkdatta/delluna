export const name="language_gb_english-fill";
export const id="dl_dd0c5ffadaadb2d61e51";
export const url=new URL("../icons/language_gb_english-fill.svg?v=7ab068cf969fb8119cd82a599428b1db8cecacf437b7e1a1dc280c4965672903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
