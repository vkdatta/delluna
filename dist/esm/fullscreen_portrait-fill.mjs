export const name="fullscreen_portrait-fill";
export const id="dl_7519ed1c9e50bfb7b0aa";
export const url=new URL("../icons/fullscreen_portrait-fill.svg?v=6ec96ffbf9c9bad2a4103c93503bc2a1bcb9ed8001c6dbd6e63b6484f2098ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
