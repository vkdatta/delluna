export const name="panorama_wide_angle";
export const id="dl_b398d17031614b6c90b0";
export const url=new URL("../icons/panorama_wide_angle.svg?v=cd94f470aa05c788b36555ffe4e0503c930a3e3c02ebe8e095c61e0b36a1e475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
