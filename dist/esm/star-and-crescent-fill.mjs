export const name="star-and-crescent-fill";
export const id="dl_ea1c610d3d0b874776ad";
export const url=new URL("../icons/star-and-crescent-fill.svg?v=ffcbf9f1d13bb937df05a6e71bbdae98fd9484340d642052263fd9a210b9f127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
