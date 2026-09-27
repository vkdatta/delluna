export const name="circles-three-fill";
export const id="dl_9d4e36898b1142ebad77";
export const url=new URL("../icons/circles-three-fill.svg?v=dac45add830e648c3ab3badf557b46f308267279476f57bf608e4071123faed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
