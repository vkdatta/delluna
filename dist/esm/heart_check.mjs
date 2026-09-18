export const name="heart_check";
export const id="dl_0f7115c0262d472a9077";
export const url=new URL("../icons/heart_check.svg?v=433cd0cbc98b042412a66d4fff1b897ba529615bc71b9aaa71dad93ccb88e92a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
