export const name="mode_cool-fill";
export const id="dl_500ed13c5ee10ccb57d4";
export const url=new URL("../icons/mode_cool-fill.svg?v=4ab84ca1c4043a3a5b3c88a7e406d60d187c951a2758ae8c6adb22bc194a381a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
