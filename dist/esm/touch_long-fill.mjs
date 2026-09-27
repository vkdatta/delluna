export const name="touch_long-fill";
export const id="dl_bc1b27b35f4ca0706101";
export const url=new URL("../icons/touch_long-fill.svg?v=d10c57c4fb3f11b263e94248f6d480da4870508d8f5122592f66547323751164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
