export const name="settings_timelapse-fill";
export const id="dl_1beca5472c61c0370cc0";
export const url=new URL("../icons/settings_timelapse-fill.svg?v=8053b35a5743758bde761b7bfb5095ad12215e198a0a5241a456dfba68c9135e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
