export const name="houseboat-fill";
export const id="dl_a9598078a63dbc65cd95";
export const url=new URL("../icons/houseboat-fill.svg?v=f22bbcb0fe206f915b9ce793aa725c1bd3edf51ef81dc0d55f67d82a63175197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
