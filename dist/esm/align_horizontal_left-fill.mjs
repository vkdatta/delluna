export const name="align_horizontal_left-fill";
export const id="dl_ede3bfda32194bef8fd9";
export const url=new URL("../icons/align_horizontal_left-fill.svg?v=40ea1d4ba167b8a038504dcaaf76e1ddee47645bc5dce080bd3ccc8b0d45eee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
