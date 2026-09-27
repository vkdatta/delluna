export const name="lucid_1-chevrons-down";
export const id="dl_b11fdd6e83e84740b21b";
export const url=new URL("../icons/lucid_1-chevrons-down.svg?v=123f179e4dfff9469f327035d18efc12d6955f3779d847b6964d6173667249a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
