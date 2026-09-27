export const name="home_max_dots-fill";
export const id="dl_369f024880d691415fb0";
export const url=new URL("../icons/home_max_dots-fill.svg?v=f92ab0c9a76bfb50d315fb783caa7d20f3d4e6dff71b133525e3a47375f937b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
