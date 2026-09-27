export const name="position_bottom_right";
export const id="dl_cc8019404e481aa32557";
export const url=new URL("../icons/position_bottom_right.svg?v=f9134b1b1da0c7276101ab220ae469482fe24d23583a8ab3bfaab96f52a4b349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
