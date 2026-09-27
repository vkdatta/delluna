export const name="circles-four-light";
export const id="dl_05a0281203a54eb28f72";
export const url=new URL("../icons/circles-four-light.svg?v=fc49e1cfd7f95e8fcc59ef6967326d8a5244fe1b9e8548a0246ac62b8e080ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
