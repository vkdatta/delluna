export const name="drag_pan";
export const id="dl_b4561d04af494ee1b589";
export const url=new URL("../icons/D/drag_pan.svg?v=08fc9116100dacd042b101710b1656f5364163ad4c7bc850381a95aceb811b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
