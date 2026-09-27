export const name="blueprint-thin";
export const id="dl_2368c92cd8604f87a54b";
export const url=new URL("../icons/blueprint-thin.svg?v=be9dc50f7f2ba684b9fb4de147ca867e88416894a3ca754d778d08b6ddf42f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
