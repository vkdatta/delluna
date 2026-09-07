export const name="calendar-blank-bold";
export const id="dl_2af1bd0e4a6f4609acfb";
export const url=new URL("../icons/calendar-blank-bold.svg?v=4a87a0b65ed1912ec706f9ce2bd35d77bca373454c7f944494e89abf99dcae89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
