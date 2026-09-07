export const name="user-sound-light";
export const id="dl_8b9d8fec12274495b958";
export const url=new URL("../icons/U/user-sound-light.svg?v=866911f678995e0e575b058e5152016192051de11416bf5783c26be8636b2024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
