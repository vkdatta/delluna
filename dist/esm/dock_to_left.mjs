export const name="dock_to_left";
export const id="dl_5d66adda1b3cecfa1d4b";
export const url=new URL("../icons/dock_to_left.svg?v=0b9dfbd6628eb83300c0b39f782a9dbc173c8542cf752231be113009e1359c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
