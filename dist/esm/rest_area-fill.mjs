export const name="rest_area-fill";
export const id="dl_aac02209718f37f76101";
export const url=new URL("../icons/rest_area-fill.svg?v=8acda0aa75037f483cf3e8bef15cbd36454123a6db3e48de50048f559b3f210f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
