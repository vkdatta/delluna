export const name="backpack-light";
export const id="dl_3c298aeb3e604b1c833f";
export const url=new URL("../icons/backpack-light.svg?v=fc8ccccff0d57bd5e8b91e6915490c584ccb5aa3dde40664ad2a7f7c754b42cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
