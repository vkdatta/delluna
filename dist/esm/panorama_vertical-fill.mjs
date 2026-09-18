export const name="panorama_vertical-fill";
export const id="dl_d2b4b10fb7674301bfa9";
export const url=new URL("../icons/panorama_vertical-fill.svg?v=d0a06480940ef319f6202f2ce1c0d7228d7ac52c85e20ab1d3a3a2db730d4fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
