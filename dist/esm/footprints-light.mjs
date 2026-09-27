export const name="footprints-light";
export const id="dl_d645b73b12994168a0a7";
export const url=new URL("../icons/footprints-light.svg?v=92cc64b186061fa294b62cc85ca207523b75ee7da46cfbcd636aafa2a71cce7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
