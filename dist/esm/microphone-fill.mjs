export const name="microphone-fill";
export const id="dl_11f609c34d3049dfafb9";
export const url=new URL("../icons/microphone-fill.svg?v=3844d4a67a618735850be9b2affcc5804779ba292b27e66d3d517a185d0f5bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
