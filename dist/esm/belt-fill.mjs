export const name="belt-fill";
export const id="dl_8f402f3d0fd44a83850b";
export const url=new URL("../icons/belt-fill.svg?v=2ab3ba84f64d5fb394a50173c4832424505c98998a650284ee8eeff763bf367e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
