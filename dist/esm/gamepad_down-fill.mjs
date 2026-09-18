export const name="gamepad_down-fill";
export const id="dl_69e5ad59d44b4ee5a795";
export const url=new URL("../icons/gamepad_down-fill.svg?v=c2ce944ca0ed75a154a1fa201fd9f876ebd323740f4d49f17ca63d2352e1fa19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
