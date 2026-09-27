export const name="eraser_size_1";
export const id="dl_85eb3387cc7267cc1bf6";
export const url=new URL("../icons/eraser_size_1.svg?v=8b65c67bc0075a227240da748278ad53cf1dab27480ca6702dbedc3d4872089d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
