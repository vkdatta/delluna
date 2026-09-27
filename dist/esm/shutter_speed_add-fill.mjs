export const name="shutter_speed_add-fill";
export const id="dl_e80714e2987d1601b10a";
export const url=new URL("../icons/shutter_speed_add-fill.svg?v=80e734997eaaa4de004cc01e3bbff8672572a178fe8ad41944e8acde9c238812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
