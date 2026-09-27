export const name="identity_platform";
export const id="dl_0ea1eebf3ecd43e9da03";
export const url=new URL("../icons/identity_platform.svg?v=1b6a04a9f17b46619d6d2900991158b6bee0fab88a6d6706b5a5edf309a5d040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
