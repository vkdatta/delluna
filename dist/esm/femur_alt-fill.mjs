export const name="femur_alt-fill";
export const id="dl_528e2abbd122ddff91e3";
export const url=new URL("../icons/femur_alt-fill.svg?v=af858517f214244cd6942cf350d16fcc56ab3095a679886038d060c9c86f54e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
