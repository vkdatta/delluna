export const name="move_selection_right";
export const id="dl_63b9b8e3c9e98095cd4c";
export const url=new URL("../icons/move_selection_right.svg?v=da1ae21983e6e820d4d84a85d213b7630f6d1176a308777c17376ea73a8f0483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
