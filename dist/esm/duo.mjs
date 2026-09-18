export const name="duo";
export const id="dl_d0276c609be14ee89e96";
export const url=new URL("../icons/duo.svg?v=5db9e64d2f836a55582f128ad0b8c68fe8ded4f7ab7411db169e68c65532bd44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
