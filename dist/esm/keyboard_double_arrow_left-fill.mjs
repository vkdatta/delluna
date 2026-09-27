export const name="keyboard_double_arrow_left-fill";
export const id="dl_7dc4beede87bb8db14fb";
export const url=new URL("../icons/keyboard_double_arrow_left-fill.svg?v=2f4c134700f7849865f8236b0e2b7f852a400d409bed81a013a79c315d751e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
