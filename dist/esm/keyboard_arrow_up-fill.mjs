export const name="keyboard_arrow_up-fill";
export const id="dl_52b2dd817a12630c1a59";
export const url=new URL("../icons/keyboard_arrow_up-fill.svg?v=ff3cc3fccc7b8e593763b3465b8960f5d3c60e0a5790f64b40e523255b60c51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
