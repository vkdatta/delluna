export const name="speaker-low-thin";
export const id="dl_e5d70f6fdf6f7b8f497c";
export const url=new URL("../icons/speaker-low-thin.svg?v=736bd27a5fa7daf6fdad975234b622e006911f9c50256407333868ecb274e0f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
