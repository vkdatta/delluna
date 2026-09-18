export const name="format_image_break_left";
export const id="dl_c73e6607d5dd48dc8cb2";
export const url=new URL("../icons/format_image_break_left.svg?v=1b79c2d8e1ce58c26bd4cd8a730e715f6f4d932dbf5be7deea5bda9f646b6cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
