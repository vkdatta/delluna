export const name="water_lux-fill";
export const id="dl_7378e80f5207112e7ef8";
export const url=new URL("../icons/water_lux-fill.svg?v=fa6780d6908a159a725587bdd96d2a43f825d1c4e88a5e80860fbd629768f6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
