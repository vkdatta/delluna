export const name="suitcase-bold";
export const id="dl_b32d20dfc3be40b7a625";
export const url=new URL("../icons/S/suitcase-bold.svg?v=faa55b4f3414afb30135cba790b316e66f5f070920d351a4590681fefd63faac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
