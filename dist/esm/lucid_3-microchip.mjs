export const name="lucid_3-microchip";
export const id="dl_f00b4621fa274a9481b0";
export const url=new URL("../icons/lucid_3-microchip.svg?v=7be60eb111e6095be80480c2724f0b86c8ff351e616f74844259ec31da8ffee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
