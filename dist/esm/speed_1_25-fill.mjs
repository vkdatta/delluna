export const name="speed_1_25-fill";
export const id="dl_b5d0ebe8f3fb4ea69172";
export const url=new URL("../icons/S/speed_1_25-fill.svg?v=814b9536718fdf0f7d951eff207e05defb6820f86a8f2eeb70cccbe608ce550a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
