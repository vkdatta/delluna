export const name="mobile_info-fill";
export const id="dl_963c0dc41b935fe5a382";
export const url=new URL("../icons/mobile_info-fill.svg?v=e66eb58822aefafbaa1b1c8c680b20ca0f57673fc89a376b5b302cb2ed2f752a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
