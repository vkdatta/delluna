export const name="transition_fade-fill";
export const id="dl_23900fe44d0c357648d7";
export const url=new URL("../icons/transition_fade-fill.svg?v=bd7342b151f80f15df043315cb74d102a1afed06c6db8579d651eed7d672508c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
