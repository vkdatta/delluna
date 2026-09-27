export const name="move_up-fill";
export const id="dl_6e2051b0b6c626cf4ba7";
export const url=new URL("../icons/move_up-fill.svg?v=8acdf89c4555b9a61ce66b66f540a896c5fa764bba567d697864d318b96f067c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
