export const name="desktop_portrait-fill";
export const id="dl_9b40d4f14812c3503b86";
export const url=new URL("../icons/desktop_portrait-fill.svg?v=d2802e696d087cd1aa2d840fcb9a8727f2a4b71213982144f23de5d06c9f817a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
