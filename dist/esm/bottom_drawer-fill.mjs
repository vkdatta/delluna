export const name="bottom_drawer-fill";
export const id="dl_cff4d4316069d65c10d8";
export const url=new URL("../icons/bottom_drawer-fill.svg?v=ac24f146674af73aa2693bf53487d1abcb70c509cddd15b02212bb2bb23ca35f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
