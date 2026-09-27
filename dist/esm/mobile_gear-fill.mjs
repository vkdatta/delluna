export const name="mobile_gear-fill";
export const id="dl_15b6936837f4b3b9389b";
export const url=new URL("../icons/mobile_gear-fill.svg?v=02c0aac33a51de93513097f91452015ff12ce2e588259eee57c881e59bb3d50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
