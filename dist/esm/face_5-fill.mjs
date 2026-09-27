export const name="face_5-fill";
export const id="dl_3c2ddaa8fc5d3b51cae7";
export const url=new URL("../icons/face_5-fill.svg?v=a5c69b9073895c43bbba9b2ab44f03f3d69ff45672c0be2056cfdc7c69a88335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
