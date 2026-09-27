export const name="keyboard_arrow_left-fill";
export const id="dl_6dddd2b6e8bf009b880f";
export const url=new URL("../icons/keyboard_arrow_left-fill.svg?v=1dc39c9a077f78fb659bcc82c0791697c787421a04e1a3d6d99c87128da860ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
