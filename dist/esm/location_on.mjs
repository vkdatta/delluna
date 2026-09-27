export const name="location_on";
export const id="dl_7ff2cc195a0f0e04c434";
export const url=new URL("../icons/location_on.svg?v=45d7a2b590eb37073075361c67d4a53dda34c697c88ac3d641616ae31748fc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
