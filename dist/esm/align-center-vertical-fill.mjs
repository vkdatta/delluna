export const name="align-center-vertical-fill";
export const id="dl_21975b96456640fe946a";
export const url=new URL("../icons/align-center-vertical-fill.svg?v=0b2b43167c8573a3fcc53e33a402ea3d2ce68afdf2a83dca95bb854747a67d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
