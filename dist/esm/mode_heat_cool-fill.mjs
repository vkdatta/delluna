export const name="mode_heat_cool-fill";
export const id="dl_e93fffb28bc449239da9";
export const url=new URL("../icons/mode_heat_cool-fill.svg?v=22a6c4441f885e6a0db3b9fb1d663e030217ead0b137836ad4fb442ec1c101b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
