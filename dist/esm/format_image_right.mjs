export const name="format_image_right";
export const id="dl_031d2b53ad4fad508201";
export const url=new URL("../icons/format_image_right.svg?v=fd38130cc49a619c6468103ecadb12b5362637d1f09864b470d2adb42f9adca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
