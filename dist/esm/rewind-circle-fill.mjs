export const name="rewind-circle-fill";
export const id="dl_958c4a8b88ef4443ab61";
export const url=new URL("../icons/rewind-circle-fill.svg?v=30ff94828030ec871b7890ac8719cd7ebf585e75105a556cf6b1195229900914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
