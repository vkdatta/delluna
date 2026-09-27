export const name="density_medium-fill";
export const id="dl_d6f6af66685758737631";
export const url=new URL("../icons/density_medium-fill.svg?v=939abf2d7e93871a6e4fb16b9058389913ab2e5865a319c589242830e3cb549d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
