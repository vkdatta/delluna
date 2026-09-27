export const name="panorama_wide_angle-fill";
export const id="dl_a69e420c2caf020d0498";
export const url=new URL("../icons/panorama_wide_angle-fill.svg?v=5bea2894f7f381113888d4fa8fb510645bcfa0036b2246cef3d563d674154bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
