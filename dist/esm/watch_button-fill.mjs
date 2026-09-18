export const name="watch_button-fill";
export const id="dl_addaa1662ecd450daa9a";
export const url=new URL("../icons/watch_button-fill.svg?v=4eb832149c163cbed2d823611198c011a25abd0c168ee4f3d6b1ee8904daa9c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
